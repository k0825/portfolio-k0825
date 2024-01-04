import { Anchor, Container, HoverCard } from "@mantine/core";
import styles from "./Header.module.scss";
import { Logo } from "../logo/Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.container}>
          <Logo />
          <a href="/" className={styles.link}>
            HOME
          </a>
        </div>
      </Container>
    </header>
  );
};
