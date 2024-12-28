"use client";

import {
  ActionIcon,
  Container,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMenu2, IconX } from "@tabler/icons-react";
import styles from "./Header.module.scss";
import { ProfileLogo } from "../profileLogo/ProfileLogo";
import { LightDarkButton } from "../lightDarkButton/LightDarkButton";

type HeaderSmpProps = {
  onMemuClick: () => void;
  onCloseClick: () => void;
  isMenuOpen: boolean;
};

export const HeaderSmp = ({
  onMemuClick,
  onCloseClick,
  isMenuOpen,
}: HeaderSmpProps): JSX.Element => {
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
          <Group gap={10}>
            <LightDarkButton useLightDark={useLightDark} />
            {isMenuOpen ? (
              <ActionIcon
                onClick={() => onCloseClick()}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
              >
                <IconX />
              </ActionIcon>
            ) : (
              <ActionIcon
                onClick={() => onMemuClick()}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
              >
                <IconMenu2 />
              </ActionIcon>
            )}
          </Group>
        </div>
      </Container>
    </header>
  );
};
