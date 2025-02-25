import Image from "next/image";
import { useState } from "react";
import { Stacks } from "./stacks";

export function Main() {
  // ユーザーが入力したテーマを保存するための状態を作成
  const [theme, setTheme] = useState("");
  const [summary, setSummary] = useState(""); // summaryを保存するための状態を追加
  const [wikiUrl, setWikiUrl] = useState(""); // WikipediaのURLを保存するための状態を追加

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
      setSummary(data.summary); // 取得したsummaryを状態に保存
      setWikiUrl(data.url); // 取得したURLを状態に保存
    } catch (error) {
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
          <h2 className="text-lg font-bold">要約:</h2>
          <p>{summary}</p>
          {wikiUrl && (
            <a href={wikiUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-2 block">
              Wikipediaで記事を読む
            </a>
          )}
        </div>
      )}
      {/* スタックスロゴを表示 */}
      <Stacks />
    </main>
  );
}
