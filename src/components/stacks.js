import Image from "next/image";

export function Stacks() {
  return (
    <div className="flex flex-col gap-10 flex-nowrap stacks w-full mt-10 items-center">
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-4xl font-bold text-center  leading-tight text-center">
        技術スタック
      </h2>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">フロントエンド</h2>
        <div className="flex flex-row gap-2">
          <Image className="dark:invert" src="/next-js.svg" alt="Next.js logo" width={50} height={38} priority />
          <Image className="" src="/react.svg" alt="React logo" width={50} height={38} priority />
          <Image className="" src="/tailwind.svg" alt="tailwind logo" width={50} height={38} priority />
          <Image className="" src="/vercel_favicon.svg" alt="Vercel logo" width={50} height={38} priority />
        </div>
      </div>

      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">バックエンド</h2>
        <div className="flex flex-row gap-2">
          <Image className="scale-150" src="/python.svg" alt="python logo" width={50} height={38} priority />
          <Image className="" src="/fastapi.svg" alt="fastapi logo" width={50} height={38} priority />
          <Image className="dark:invert" src="/render.webp" alt="wikipedia logo" width={50} height={38} priority />
        </div>
      </div>
      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">API</h2>
        <div className="flex flex-row gap-2">
          <Image className="" src="/wikipedia.svg" alt="wikipedia logo" width={50} height={38} priority />
        </div>
      </div>
      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">ポートフォリオ</h2>
        <div className="flex flex-row gap-2">
          <Image className="" src="/portfolio.png" alt="portfolio logo" width={50} height={38} priority />
        </div>
      </div>
    </div>
  );
}
