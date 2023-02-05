import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.wide}>
        <div className={styles.inner}>
          <Image src="/next.svg" alt="ロゴ" height={33} width={150} />
          <div className={styles.menu}>
            <div className={styles.item}>
              <Link href={"https://www.google.com"}>
                <b>Blog</b>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={"https://www.yahoo.co.jp"}>
                <b>Skill</b>
              </Link>
            </div>
            <div className={styles.item}>
              <Link href={"https://www.nifty.com"}>
                <b>aaa</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
