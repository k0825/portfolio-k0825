import { Container, Text } from "@mantine/core";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container size="md" mt={30}>
        <Text c="dimmed" size="sm">
          © 2024 Kazukiyo Ikarigawa. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
};
