import Head from "next/head";

export function Title(props) {
  return (
    <>
      <Head>
        <title>{props.title} | AIモチベーター</title>
      </Head>
    </>
  );
}
