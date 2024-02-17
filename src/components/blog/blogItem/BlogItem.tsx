import styles from "./BlogItem.module.scss";
import { Text, Title } from "@mantine/core";
import { Blog } from "@/data/microcms";

type BlogItemProps = {
  content: Blog;
};

export const BlogItem = ({ content }: BlogItemProps) => {
  console.log(content);
  return (
    <a href={`/blog/${content.id}`} className={styles.link}>
      <div className={styles.container}>
        <Title order={3} fw={"normal"} lineClamp={2}>
          {content.title}
        </Title>
        <Text c="dimmed" size="sm" lineClamp={2}>
          {content.description}
        </Text>
      </div>
    </a>
  );
};
