import { BlogItem } from "../blogItem/BlogItem";

import styles from "./BlogList.module.scss";
import { Blog } from "@/data/microcms";

type BlogListProps = {
  contents: Blog[];
};

export const BlogList = ({ contents }: BlogListProps) => {
  return (
    <ul className={styles.list}>
      {contents.map((content) => (
        <li key={content.id} className={styles.item}>
          <BlogItem
            id={content.id}
            title={content.title}
            description={content.description}
          />
        </li>
      ))}
    </ul>
  );
};
