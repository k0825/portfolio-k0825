import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { client } from "@/lib/client";

export default function Home({ allPostsData }) {
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
                <img
                  src={eyecatch.url}
                  alt="サムネ"
                  className={styles.thumbnailImage}
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
}

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      allPostsData: data.contents,
    },
  };
}
