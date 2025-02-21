import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>AIモチベーター</title>
        <meta name="description" content="テーマ生成" />
      </Head>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
          <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
          <input type="text" placeholder="テーマを入力" className="border-4 border-red-900 rounded-md p-2 w-full" />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://www.foriio.com/koreyuki" target="_blank" rel="noopener noreferrer">
            &copy; 2025 Koreyuki Akao
          </a>
        </footer>
      </div>
    </>
  );
}
