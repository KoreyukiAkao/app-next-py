import Image from "next/image";
import { useState, useEffect } from "react";
import { Stacks } from "./stacks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export function Main() {
  // ユーザーが入力したテーマを保存するための状態を作成
  const [theme, setTheme] = useState("");
  const [summary, setSummary] = useState("");
  const [translatedSummary, setTranslatedSummary] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [wikiUrl, setWikiUrl] = useState("");
  const [modalContent, setModalContent] = useState(null);

  // input の値が変わったときに呼ばれる関数
  const handleInputChange = (e) => {
    setTheme(e.target.value); // ユーザーが入力したテキストを取得して保存
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendThemeToBackend();
    }
  };

  // 送信ボタンを押したときの処理
  const sendThemeToBackend = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      const response = await fetch(backendUrl + "/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: theme }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSummary(data.summary);
      setTranslatedSummary(data.translated_summary);
      setWikiUrl(data.url);

      // キーワードが存在する場合のみ設定
      if (data.keywords && Array.isArray(data.keywords)) {
        setKeywords(data.keywords.slice(0, 3)); // キーワードの数を制限
      } else {
        setKeywords([]); // キーワードがない場合は空の配列を設定
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const highlightKeywords = (text, keywords) => {
    const regex = new RegExp(`\\b(${keywords.map((k) => escapeRegExp(k.word)).join("|")})\\b`, "gi");
    return text.split(regex).map((part, index) =>
      keywords.some((k) => k.word.toLowerCase() === part.toLowerCase()) ? (
        <span
          key={index}
          style={{ color: "black", fontWeight: "bold", cursor: "pointer" }}
          onClick={() => {
            setModalContent(keywords.find((k) => k.word.toLowerCase() === part.toLowerCase()).translation);
            speak(part);
          }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // 言語を設定
    utterance.rate = 0.1; // 読み上げ速度を設定（1.0が通常の速度）
    window.speechSynthesis.speak(utterance);
  };

  const fetchTranslation = async (word) => {
    try {
      const response = await fetch("https://api.deepl.com/v2/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        },
        body: new URLSearchParams({
          text: word,
          target_lang: "JA",
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setModalContent(data.translations[0].text);
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  };

  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full">
      <h1 className="text-5xl font-bold text-center w-full leading-tight">
        Wikipedia <span className="block font text-4xl">要約アプリ</span>
      </h1>
      <div className="flex w-full relative">
        {/* ユーザーがテーマを入力するためのテキストボックス */}
        <input
          type="text"
          placeholder="テーマを入力" // テキストボックスの中に表示されるヒント
          className="border-4 border-blue-500 rounded p-2 w-full text-black font-bold" // スタイルを適用
          value={theme} // 入力した文字を保存
          onChange={handleInputChange} // 入力が変わったときに呼ばれる関数
          onKeyPress={handleKeyPress} // Enterキーが押されたときに呼ばれる関数
        />

        {/* テーマを送信するためのボタン */}
        <button onClick={sendThemeToBackend} className="p-2 bg-blue-500 text-white rounded-tl-none rounded-tr-md rounded-bl-none rounded-br-md w-1/5 min-w-min absolute right-0 top-0 h-full">
          送信
        </button>
      </div>

      {/* summaryを表示 */}
      {summary && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black w-full">
          <h2 className="text-lg font-bold">日本語要約:</h2>
          <p>{summary}</p>
        </div>
      )}

      {translatedSummary && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black w-full">
          <h2 className="text-lg font-bold">英語要約:</h2>
          <p>
            {highlightKeywords(translatedSummary, keywords)}
            <button onClick={() => speak(translatedSummary)} className="ml-2 text-blue-500">
              <FontAwesomeIcon icon={faVolumeUp} />
            </button>
          </p>
        </div>
      )}

      {wikiUrl && (
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">
          Wikipediaで記事を読む
        </a>
      )}

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalContent(null)}>
              &times;
            </span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}

      {/* スタックスロゴを表示 */}
      <Stacks />
    </main>
  );
}
