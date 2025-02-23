// このコンポーネントの動作:
// 1. ユーザーがテキストボックスにテーマを入力する。
//    - テキストボックスの値は、ReactのuseStateフックを使って管理される。
//    - 入力が変わるたびに、handleInputChange関数が呼ばれる。
//    - handleInputChangeは、イベントオブジェクトから入力された値を取得し、themeの状態を更新する。
//      - e: イベントオブジェクト
//      - target: イベントが発生した要素（ここでは<input>）
//      - value: テキストボックスに入力された現在の値
//    - setThemeが実行されると:
//      - useStateフックによってthemeの状態が更新される
//      - コンポーネントが再レンダリングされる
//      - テキストボックスに入力された値がUIに反映される
// 2. 送信ボタンをクリックすると、sendThemeToBackend関数が呼ばれる。
//    - sendThemeToBackendは、fetch APIを使ってバックエンドにPOSTリクエストを送信する。
//    - リクエストのボディには、JSON形式でthemeの状態が含まれる。
//    - バックエンドからのレスポンスを受け取り、コンソールにメッセージを表示する。
// 3. バックエンドとの通信が成功すると、コンソールにバックエンドからのメッセージが表示される。
//    - エラーが発生した場合は、エラーメッセージがコンソールに表示される。

import Image from "next/image";
import { useState } from "react";

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
      const response = await fetch("http://127.0.0.1:8000/summarize", {
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
      {/* Next.jsのロゴを表示 */}
      <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />

      {/* ユーザーがテーマを入力するためのテキストボックス */}
      <input
        type="text"
        placeholder="テーマを入力" // テキストボックスの中に表示されるヒント
        className="border-4 border-red-900 rounded-md p-2 w-full text-black font-bold" // スタイルを適用
        value={theme} // 入力した文字を保存
        onChange={handleInputChange} // 入力が変わったときに呼ばれる関数
      />

      {/* テーマを送信するためのボタン */}
      <button onClick={sendThemeToBackend} className="mt-2 p-2 bg-blue-500 text-white rounded">
        送信
      </button>

      {/* summaryを表示 */}
      {summary && (
        <div className="mt-4 p-4 border rounded bg-gray-100 text-black">
          <h2 className="text-lg font-bold">要約:</h2>
          <p>{summary}</p>
        </div>
      )}
    </main>
  );
}
