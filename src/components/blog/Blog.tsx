import { getPosts } from "@/data/posts/posts";
import { Text, Title } from "@mantine/core";

import styles from "./Blog.module.scss";
import { Zenn } from "../icons/Zenn";

export const Blog = async () => {
  const posts = await getPosts();
  return (
    <>
      <Title order={1} mt={30} mb={10}>
        Tech Blog
      </Title>
      <ul className={styles.list}>
        {posts.pagePosts.map((post) => (
          <li key={post.title} className={styles.item}>
            <a href={post.link} className={styles.link} target="_blank">
              <div className={styles.outer}>
                <Zenn size={50} />
                <div className={styles.inner}>
                  <Title order={3} fw={"normal"} lineClamp={2}>
                    {post.title}
                  </Title>
                  <Text c="dimmed" size="sm">
                    {post.date}
                  </Text>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
