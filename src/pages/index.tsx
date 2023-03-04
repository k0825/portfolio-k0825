import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getPostsData } from "@/lib/post";

import styles from "@/styles/Home.module.scss";
import utilStyles from "@/styles/utils.module.scss";
import { Post } from "@/components/Post/Post";
import { Header } from "@/components/Header/Header";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Home = ({ allPostsData }: HomeProps) => {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Next.js Blog</title>
      </Head>
      <Header />
      <section className={utilStyles.headingMd}>
        <p>吾輩はエンジニアである。名前はまだない。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, createdAt, title, eyecatch }) => (
            <article key={id}>
              <Post
                id={id}
                createdAt={createdAt}
                title={title}
                eyecatch={eyecatch}
              />
            </article>
          ))}
        </div>
      </section>
    </div>
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
