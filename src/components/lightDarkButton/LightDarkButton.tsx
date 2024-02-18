import { ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import clsx from "clsx";
import styles from "./LightDarkButton.module.scss";

type LightDarkButtonProps = {
  useLightDark: () => void;
};

export const LightDarkButton = ({ useLightDark }: LightDarkButtonProps) => {
  return (
    <ActionIcon
      onClick={useLightDark}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <IconSun className={clsx(styles.icon, styles.light)} stroke={1.5} />
      <IconMoon className={clsx(styles.icon, styles.dark)} stroke={1.5} />
    </ActionIcon>
  );
};
