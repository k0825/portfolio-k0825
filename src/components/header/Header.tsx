import { Container } from "@mantine/core";
import styles from "./Header.module.scss";
import { Profile } from "../profile/Profile";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.container}>
          <Profile />
          <a href="/" className={styles.link}>
            HOME
          </a>
        </div>
      </Container>
    </header>
  );
};
