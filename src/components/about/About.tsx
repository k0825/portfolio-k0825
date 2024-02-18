import { Avatar, Title } from "@mantine/core";

import styles from "./About.module.scss";
import { GitHubIcon } from "../icons/GitHubIcon";
import { XIcon } from "../icons/XIcon";
import { ZennIcon } from "../icons/ZennIcon";

export const About = (): JSX.Element => {
  return (
    <>
      <Title order={1} mb={10}>
        About me
      </Title>
      <section className={styles.about}>
        <div className={styles.profile}>
          <Avatar src="profile.jpeg" size={120} radius={120} mx="auto" />
          <Title order={2}>Kazukiyo Ikarigawa</Title>
          <div className={styles.logos}>
            <a href="https://github.com/k0825" className={styles.link}>
              <GitHubIcon size={32} />
            </a>
            <a href="https://x.com/ikaridev0825" className={styles.link}>
              <XIcon size={32} />
            </a>
            <a href="https://zenn.dev/ikarin0825" className={styles.link}>
              <ZennIcon size={32} />
            </a>
          </div>
        </div>

        <div>
          <p>はじめまして、こんにちは</p>
          <p>某ISP会社でWebエンジニアをやっています</p>
          <p>マイペースな自堕落エンジニアです</p>
          <p>最近はNext.js, Go, AWSをよく触っています</p>
        </div>
      </section>
    </>
  );
};
