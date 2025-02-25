import Image from "next/image";
import { useState } from "react";
import { Stacks } from "./stacks";
export function Main() {
  // ユーザーが入力したテーマを保存するための状態を作成
  const [theme, setTheme] = useState("");
  const [summary, setSummary] = useState(""); // summaryを保存するための状態を追加

  // input の値が変わったときに呼ばれる関数
  const handleInputChange = (e) => {
    setTheme(e.target.value); // ユーザーが入力したテキストを取得して保存
  };

  // 送信ボタンを押したときの処理
  const sendThemeToBackend = async () => {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
      console.log(backendUrl);
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
    } catch (error) {
      console.error("Error sending theme to backend:", error);
    }
  };

  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
      <h1 className="text-4xl font-bold">
        Wikipedia  要約アプリ
      </h1>
      {/* ユーザーがテーマを入力するためのテキストボックス */}
      <input
        type="text"
        placeholder="テーマを入力" // テキストボックスの中に表示されるヒント
        className="border-4 border-red-900 rounded-md p-2 w-full text-black font-bold" // スタイルを適用
        value={theme} // 入力した文字を保存
        onChange={handleInputChange} // 入力が変わったときに呼ばれる関数
      />

      {/* テーマを送信するためのボタン */}
      <button onClick={sendThemeToBackend} className="mt-2 p-2 bg-blue-500 text-white rounded w-full">
        送信
      </button>

      {/* summaryを表示 */}
      {summary && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black">
          <h2 className="text-lg font-bold">要約:</h2>
          <p>{summary}</p>
        </div>
      )}
      {/* スタックスロゴを表示 */}
      <Stacks />
    </main>
  );
}
