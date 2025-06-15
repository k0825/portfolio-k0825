import { Avatar, Text } from "@mantine/core";
import styles from "./ProfileLogo.module.scss";
import Image from "next/image";
import Link from "next/link";

export const ProfileLogo = () => {
  return (
    <Link href="/" className={styles.link}>
      <div className={styles.logo}>
        <Avatar size={28} radius={28} mx="auto">
          <Image src="/profile.jpeg" alt="Profile" width={28} height={28} />
        </Avatar>
        <Text ta="center" fz="xl" fw={500}>
          k0825
        </Text>
      </div>
    </Link>
  );
};
