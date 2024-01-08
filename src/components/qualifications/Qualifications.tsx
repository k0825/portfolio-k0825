import Image from "next/image";
import styles from "./Qualifications.module.scss";
import { Text } from "@mantine/core";

export const Qualifications = () => {
  const qualifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/1692f243-3262-4541-a74a-420165c62a0f/public_url",
      image: "/saa.png",
    },
  ];

  return (
    <ul className={styles.list}>
      {qualifications.map((q) => (
        <li key={q.name} className={styles.item}>
          <a href={q.link} className={styles.link} target="_blank">
            <div className={styles.outer}>
              <Image src={q.image} width={50} height={50} alt="saa badge" />
              <Text>{q.name}</Text>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};
