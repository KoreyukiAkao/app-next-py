import Image from "next/image";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Title } from "../components/Title";

export default function Home() {
  return (
    <>
      <Title title="ホーム" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Main />
        <Footer />
      </div>
    </>
  );
}
