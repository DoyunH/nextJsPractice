import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>DevStory</title>
        <meta name="description" content="DevStory Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_big.png" />
      </Head>
      <div className="flex-centered-container flex-col h-screen">
        <div>
          <Image
            src="/logo_big.png"
            alt="DevStory Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="title mb-10">
          <h1>Aprender español con Doyun</h1>
        </div>
        <Link href="/projects">
          <button className="btn bg-primary-yellow hover:bg-yellow-600">
            ¡Empezamos!
          </button>
        </Link>
      </div>
    </>
  );
}
