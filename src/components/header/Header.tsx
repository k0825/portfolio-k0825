import { Container, Group } from "@mantine/core";
import styles from "./Header.module.scss";
import { ProfileLogo } from "../profileLogo/ProfileLogo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.container}>
          <ProfileLogo />
          <Group gap={5} visibleFrom="sm">
            <Link href="/" className={styles.link}>
              HOME
            </Link>
            <Link href="/blog" className={styles.link}>
              BLOG
            </Link>
          </Group>
        </div>
      </Container>
    </header>
  );
};
