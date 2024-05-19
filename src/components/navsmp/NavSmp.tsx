import Link from "next/link";
import styles from "./NavSmp.module.scss";
import { Stack } from "@mantine/core";

type NavSmpProps = {
  isMenuOpen: boolean;
};

export const NavSmp = ({ isMenuOpen }: NavSmpProps): JSX.Element => {
  return (
    <nav
      className={styles.nav}
      style={!isMenuOpen ? { display: "none" } : undefined}
    >
      <Stack>
        <Link href="/" className={styles.link}>
          HOME
        </Link>
        <Link href="/blog" className={styles.link}>
          BLOG
        </Link>
        <Link href="/gallery" className={styles.link}>
          GALLERY
        </Link>
      </Stack>
    </nav>
  );
};
