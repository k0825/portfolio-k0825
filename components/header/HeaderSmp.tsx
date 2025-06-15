"use client";

import {
  Container,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import styles from "./Header.module.scss";
import { ProfileLogo } from "../profileLogo/ProfileLogo";
import { LightDarkButton } from "../lightDarkButton/LightDarkButton";
import { JSX } from "react";

export const HeaderSmp = (): JSX.Element => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const useLightDark = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };

  return (
    <header className={styles.header} data-mobile="true">
      <Container size="lg">
        <div className={styles.container}>
          <ProfileLogo />
          <LightDarkButton useLightDark={useLightDark} />
        </div>
      </Container>
    </header>
  );
};
