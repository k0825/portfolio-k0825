import Link from "next/link";

import styles from "./Header.module.scss";

export const Header = (): JSX.Element => {
  return (
    <header>
      <div className={styles.menu}>
        <div>
          <Link href={"https://www.google.com"}>Blog</Link>
        </div>
        <div>
          <Link href={"https://www.yahoo.co.jp"}>Skill</Link>
        </div>
        <div>
          <Link href={"https://www.nifty.com"}></Link>
        </div>
      </div>
    </header>
  );
};
