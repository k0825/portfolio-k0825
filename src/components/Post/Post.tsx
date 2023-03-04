import Image from "next/image";
import Link from "next/link";

import styles from "./Post.module.scss";
import utilStyles from "@/styles/utils.module.scss";

type PostProps = {
  id: string;
  title: string;
  createdAt: string;
  eyecatch: {
    url: string;
  };
};

export const Post = ({ id, title, eyecatch, createdAt }: PostProps) => {
  return (
    <>
      <Link href={`/posts/${id}`}>
        <Image
          src={eyecatch.url}
          alt="サムネ"
          className={styles.thumbnailImage}
          width={950}
          height={400}
        />
      </Link>
      <Link href={`/posts/${id}`} className={utilStyles.boldText}>
        {title}
      </Link>
      <br />
      <small className={utilStyles.lightText}>{createdAt}</small>
    </>
  );
};
