"use client";

import {
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import styles from "./Header.module.scss";
import { ProfileLogo } from "../profileLogo/ProfileLogo";
import Link from "next/link";
import { LightDarkButton } from "../lightDarkButton/LightDarkButton";

export const Header = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const useLightDark = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header}>
      <Container size="lg">
        <div className={styles.container}>
          <ProfileLogo />
          <Group gap={5}>
            <Link href="/" className={styles.link}>
              HOME
            </Link>
            <Link href="/blog" className={styles.link}>
              BLOG
            </Link>
            <Link href="/gallery" className={styles.link}>
              GALLERY
            </Link>
            <LightDarkButton useLightDark={useLightDark} />
          </Group>
        </div>
      </Container>
    </header>
  );
};
