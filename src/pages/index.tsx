import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { getPostsData } from "@/lib/post";

import { Layout } from "../components/Layout";
import styles from "../styles/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>私はエンジニア。名前はまだない。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, createdAt, title, eyecatch }) => (
            <article key={id}>
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
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPostsData = await getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
