import { Container } from "@mantine/core";
import styles from "./Header.module.scss";
import { ProfileLogo } from "../profileLogo/ProfileLogo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.container}>
          <ProfileLogo />
          <a href="/" className={styles.link}>
            HOME
          </a>
        </div>
      </Container>
    </header>
  );
};
