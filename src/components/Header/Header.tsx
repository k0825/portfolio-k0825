import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Image src="/vercel.svg" alt="ロゴ" height={10} width={20} />
        <div className={styles.menu}>
          <div>
            <Link href={"https://www.google.com"}>Blog</Link>
          </div>
          <div>
            <Link href={"https://www.yahoo.co.jp"}>Skill</Link>
          </div>
          <div>
            <Link href={"https://www.nifty.com"}>aaa</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
