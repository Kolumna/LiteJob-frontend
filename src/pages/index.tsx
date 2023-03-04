import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="clas flex justify-center items-center min-h-screen">
        <section className="text-8xl font-bold">
          <span className="text-teal-400">Lite</span>Job new edition
        </section>
      </main>
    </>
  );
}
