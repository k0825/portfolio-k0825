import Image from "next/image";
import styles from "./Qualifications.module.scss";
import { Text, Title } from "@mantine/core";

export const Qualifications = () => {
  const qualifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/1692f243-3262-4541-a74a-420165c62a0f/public_url",
      image: "/saa.png",
    },
    {
      name: "AWS Certified Solutions Architect – Professional",
      link: "http://www.credly.com/badges/e0e119e4-a4f8-495e-9ed8-bbb78d33bb91/public_url",
      image: "/sap.png",
    },
  ];

  return (
    <>
      <Title order={1} mt={30} mb={10}>
        Qualifications
      </Title>
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
    </>
  );
};
