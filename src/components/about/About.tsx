import { Avatar, Title } from "@mantine/core";

import styles from "./About.module.scss";

export const About = (): JSX.Element => {
  const snsBaseUrl = "sns/";

  type snsItem = {
    name: string;
    url: string;
    image: string;
  };

  const snsList: snsItem[] = [
    {
      name: "X",
      url: "https://twitter.com/ikaridev0825",
      image: snsBaseUrl + "x.svg",
    },
    {
      name: "zenn",
      url: "https://zenn.dev/ikarin0825",
      image: snsBaseUrl + "zenn.svg",
    },
    {
      name: "github",
      url: "https://github.com/k0825",
      image: snsBaseUrl + "github.svg",
    },
  ];

  return (
    <section className={styles.about}>
      <div className={styles.profile}>
        <Avatar src="profile.jpeg" size={120} radius={120} mx="auto" />
        <Title order={2}>Kazukiyo Ikarigawa</Title>
        <div className={styles.logos}>
          {snsList.map((sns) => {
            return (
              <a href={sns.url} key={sns.name} className={styles.sns}>
                <Avatar src={sns.image} size={24} radius={2} mx="auto" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
