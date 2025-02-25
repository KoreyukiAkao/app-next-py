import Image from "next/image";

export function Stacks() {
  return (
    <div className="flex flex-row flex-wrap gap-12 stacks">
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-2xl font-bold">フロントエンド</h2>
      <Image className="dark:invert" src="/next-js.svg" alt="Next.js logo" width={70} height={38} priority />
      <Image className="" src="/react.svg" alt="React logo" width={70} height={38} priority />
      <Image className="" src="/tailwind.svg" alt="tailwind logo" width={70} height={38} priority />
      <Image className="" src="/vercel.svg" alt="Vercel logo" width={70} height={38} priority />
      
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-2xl font-bold">バックエンド</h2>
      <Image className="scale-150" src="/python.svg" alt="python logo" width={70} height={38} priority />
      <Image className="" src="/fastapi.svg" alt="fastapi logo" width={70} height={38} priority />
      <Image className="dark:invert" src="/render.webp" alt="wikipedia logo" width={70} height={38} priority />
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-2xl font-bold">API</h2>
      <Image className="" src="/wikipedia.svg" alt="wikipedia logo" width={70} height={38} priority />
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-2xl font-bold">ポートフォリオ</h2>
      <Image className="" src="/portfolio.png" alt="portfolio logo" width={70} height={38} priority />
    </div>
  );
}
