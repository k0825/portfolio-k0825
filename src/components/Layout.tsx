import Head from "next/head";
import Image from "next/image";

import styles from "./Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { ReactNode } from "react";

const name = "Ikari Code";

type LayoutProps = {
  children: ReactNode;
  home?: boolean;
};

export const Layout = ({ children, home }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <Image
            src="/images/profile.jpeg"
            alt="プロフィール画像"
            width={100}
            height={100}
            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
          />
        ) : (
          <Image
            src="/images/profile.jpeg"
            alt="プロフィール画像"
            width={100}
            height={100}
            className={utilStyles.borderCircle}
          />
        )}

        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && <Link href="/">←ホームへ戻る</Link>}
    </div>
  );
};
