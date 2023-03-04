import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import styles from "./Header.module.scss";
import utilStyles from "@/styles/utils.module.scss";

const name = "Ikari Code";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/images/profile.jpeg"
        alt="プロフィール画像"
        width={100}
        height={100}
        className={`${utilStyles.borderCircle} ${styles.headerImage}`}
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </header>
  );
};
