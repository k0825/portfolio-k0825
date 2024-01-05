import { Avatar, Title } from "@mantine/core";

import styles from "./About.module.scss";
import { GitHub } from "../icons/GitHub";
import { X } from "../icons/X";
import { Zenn } from "../icons/Zenn";

export const About = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <Avatar src="profile.jpeg" size={120} radius={120} mx="auto" />
        <Title order={2}>Kazukiyo Ikarigawa</Title>
        <div className={styles.logos}>
          <a href="https://github.com/k0825">
            <GitHub size={32} />
          </a>
          <a href="https://x.com/ikaridev0825">
            <X size={32} />
          </a>
          <a href="https://zenn.dev/ikarin0825">
            <Zenn size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
