import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export function Stacks() {
  return (
    <div className="flex flex-col gap-10 flex-nowrap stacks w-full mt-10 items-center">
      <hr className="w-full border-t border-gray-300" />
      <h2 className="text-4xl font-bold text-center  leading-tight text-center">技術スタック</h2>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">フロントエンド</h2>
        <div className="flex flex-row gap-6">
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/next-js.svg" alt="Next.js logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Next.js</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/react.svg" alt="React logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">React</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/tailwind.svg" alt="tailwind logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Tailwind</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/vercel.svg" alt="Vercel logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Vercel</figcaption>
          </figure>
        </div>
      </div>

      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">バックエンド</h2>
        <div className="flex flex-row gap-6">
          <figure className="flex flex-col items-center">
            <Image className="scale-150 dark:invert h-full" src="/python.svg" alt="python logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Python</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/fastapi.svg" alt="fastapi logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">FastAPI</figcaption>
          </figure>
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/render.webp" alt="wikipedia logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Render</figcaption>
          </figure>
        </div>
      </div>
      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">API</h2>
        <div className="flex flex-row gap-6">
          <figure className="flex flex-col items-center">
            <Image className="aspect-square dark:invert h-full" src="/wikipedia.svg" alt="wikipedia logo" width={50} height={50} priority />
            <figcaption className="text-sm mt-2 text-gray-500">Wikipedia</figcaption>
          </figure>
        </div>
      </div>
      {/* <hr className="w-full border-t border-gray-300" /> */}
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-2xl font-bold">ポートフォリオ</h2>
        <div className="flex flex-row gap-6">
          <a href="https://www.foriio.com/koreyuki" target="_blank" rel="noopener noreferrer">
            <figure className="flex flex-col items-center">
              <Image className="aspect-square dark:invert h-full" src="/portfolio.png" alt="portfolio logo" width={50} height={50} priority />
              <span className="flex flex-row gap-2 items-center">
                <figcaption className="text-sm mt-2 text-gray-500">foriio</figcaption>
                <FontAwesomeIcon className="text-xs mt-2" icon={faExternalLinkAlt} />
              </span>
            </figure>
          </a>
          <a href="https://github.com/KoreyukiAkao/app-next-py" target="_blank" rel="noopener noreferrer">
            <figure className="flex flex-col items-center">
              <Image className="aspect-square dark:invert h-full" src="/github.png" alt="portfolio logo" width={50} height={50} priority />
              <span className="flex flex-row gap-2 items-center">
                <figcaption className="text-sm mt-2 text-gray-500">Front</figcaption>
                <FontAwesomeIcon className="text-xs mt-2" icon={faExternalLinkAlt} />
              </span>
            </figure>
          </a>
          <a href="https://github.com/KoreyukiAkao/app-next-py_backend" target="_blank" rel="noopener noreferrer">
            <figure className="flex flex-col items-center">
              <Image className="aspect-square dark:invert h-full" src="/github.png" alt="portfolio logo" width={50} height={50} priority />
              <span className="flex flex-row gap-2 items-center">
                <figcaption className="text-sm mt-2 text-gray-500">Back</figcaption>
                <FontAwesomeIcon className="text-xs mt-2" icon={faExternalLinkAlt} />
              </span>
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
}
