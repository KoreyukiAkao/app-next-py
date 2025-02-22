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

  // input の値が変わったときに呼ばれる関数
  const handleInputChange = (e) => {
    setTheme(e.target.value); // ユーザーが入力したテキストを取得して保存
  };

  // 送信ボタンを押したときの処理
  const sendThemeToBackend = async () => {
    try {
      // fetch APIを使ってバックエンドにPOSTリクエストを送信
      const response = await fetch("http://localhost:8000/motivate", {
        method: "POST", // HTTPメソッドをPOSTに設定
        headers: {
          "Content-Type": "application/json", // リクエストのデータ形式をJSONに設定
        },
        body: JSON.stringify({ theme }), // themeの状態をJSON形式でリクエストボディに含める
      });

      // レスポンスをJSONとして取得
      const data = await response.json();

      // バックエンドからのメッセージをコンソールに表示
      console.log(data.message);
    } catch (error) {
      // エラーが発生した場合は、エラーメッセージをコンソールに表示
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
        className="border-4 border-red-900 rounded-md p-2 w-full" // スタイルを適用
        value={theme} // 入力した文字を保存
        onChange={handleInputChange} // 入力が変わったときに呼ばれる関数
      />

      {/* テーマを送信するためのボタン */}
      <button onClick={sendThemeToBackend} className="mt-2 p-2 bg-blue-500 text-white rounded">
        送信
      </button>
    </main>
  );
}
