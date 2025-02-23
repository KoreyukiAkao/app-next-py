import Head from "next/head";

export function Title(props) {
  return (
    <>
      <Head>
        <title>{`${props.title} | Wikipedia 要約`}</title>
      </Head>
    </>
  );
}
