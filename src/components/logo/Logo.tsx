import { Avatar, Text } from "@mantine/core";

import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <a href="/" className={styles.link}>
      <div className={styles.logo}>
        <Avatar src="profile.jpeg" size={28} radius={28} mx="auto" />
        <Text ta="center" fz="xl" fw={500}>
          k0825
        </Text>
      </div>
    </a>
  );
};
