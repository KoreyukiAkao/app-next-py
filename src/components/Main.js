import { useState, useEffect } from "react";
import { Stacks } from "./stacks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faStop, faPause } from "@fortawesome/free-solid-svg-icons";

export function Main() {
  const [theme, setTheme] = useState("");
  const [summary, setSummary] = useState("");
  const [translatedSummary, setTranslatedSummary] = useState("");
  const [wikiUrl, setWikiUrl] = useState("");

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
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  // テキストを音声で読み上げる関数
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US"; // 英語で読み上げ
    utterance.rate = 0.5; // 読み上げ速度を設定
    window.speechSynthesis.speak(utterance);
  };

  // 音声の再生を停止する関数
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  // 音声の再生を一時停止する関数
  const pauseSpeech = () => {
    window.speechSynthesis.pause();
  };

  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start w-full">
      <h1 className="text-5xl font-bold text-center w-full leading-tight">
        Wikipedia <span className="block font text-4xl">要約を表示する</span>
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

      {/* 翻訳された要約が存在する場合に表示 */}
      {translatedSummary && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black w-full">
          <h2 className="text-lg font-bold">英語要約:</h2>
          <p>
            {translatedSummary} {/* 翻訳された要約を表示 */}
            <span className="flex items-center justify-center gap-8 mt-4">
              {/* 音声再生ボタン */}
              <button onClick={() => speak(translatedSummary)} className="w-10 h-10 text-3xl ml-2 text-blue-500">
                <FontAwesomeIcon icon={faVolumeUp} />
              </button>
              {/* 音声一時停止ボタン */}
              <button onClick={pauseSpeech} className="w-10 h-10 text-3xl ml-2 text-blue-500">
                <FontAwesomeIcon icon={faPause} />
              </button>
              {/* 音声停止ボタン */}
              <button onClick={stopSpeech} className="w-10 h-10 text-3xl ml-2 text-blue-500">
                <FontAwesomeIcon icon={faStop} />
              </button>
            </span>
          </p>
        </div>
      )}

      {wikiUrl && (
        <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">
          Wikipediaで記事を読む
        </a>
      )}

      {/* スタックスロゴを表示 */}
      <Stacks />
    </main>
  );
}
