import Image from "next/image";

export function Main() {
  return (
    <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
    <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
    <input type="text" placeholder="テーマを入力" className="border-4 border-red-900 rounded-md p-2 w-full" />
  </main>
  );
}