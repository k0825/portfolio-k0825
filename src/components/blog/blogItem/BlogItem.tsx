import styles from "./BlogItem.module.scss";
import { Text, Title } from "@mantine/core";

type BlogItemProps = {
  id: string;
  title: string;
  description: string;
};

export const BlogItem = ({ id, title, description }: BlogItemProps) => {
  return (
    <a href={`/blog/${id}`} className={styles.container}>
      <div className={styles.textbox}>
        <Title order={3} fw={"normal"} lineClamp={2}>
          {title}
        </Title>
        <Text c="dimmed" size="sm" lineClamp={2}>
          {description}
        </Text>
      </div>
    </a>
  );
};
