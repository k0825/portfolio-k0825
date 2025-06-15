import { Avatar, Title } from "@mantine/core";
import styles from "./About.module.scss";
import { GitHubIcon } from "../icons/GitHubIcon";
import { XIcon } from "../icons/XIcon";
import { ZennIcon } from "../icons/ZennIcon";
import Image from "next/image";
import { JSX } from "react";

export const About = (): JSX.Element => {
  return (
    <>
      <Title order={1} mb={10}>
        About me
      </Title>
      <section className={styles.about}>
        <div className={styles.profile}>
          <Avatar size={120} radius={120} mx="auto">
            <Image src="/profile.jpeg" alt="Profile" width={120} height={120} />
          </Avatar>
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
          <p>マイペースで自堕落なWebエンジニアです</p>
          <p>最近はNext.js, Laravel, AWSをよく触っています</p>
        </div>
      </section>
    </>
  );
};
