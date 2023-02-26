import Layout from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import { getAllPostIds, getPostData } from "@/lib/post";
import Head from "next/head";
import { client } from "@/lib/client";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.createdAt}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/posts/${content.id}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await client.get({ endpoint: "blogs", contentId: params.id });

  return {
    props: {
      postData: data,
    },
  };
}
