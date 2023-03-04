import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import { getPostsData } from "@/lib/post";

import styles from "@/styles/Home.module.scss";
import utilStyles from "@/styles/utils.module.scss";
import { Layout } from "@/components/Layout/Layout";
import { Post } from "@/components/Post/Post";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>Next.js Blog</title>
      </Head>
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
