import Image from "next/image";

export function Main() {
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
