import { Layout } from "@/components/Layout";
import utilStyles from "@/styles/utils.module.css";
import Head from "next/head";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { getPostData, getPostsData } from "@/lib/post";
import { ParsedUrlQuery } from "querystring";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export const Post = ({ postData }: PostProps) => {
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostsData = await getPostsData();
  const paths = allPostsData.map((content) => {
    return { params: { id: content.id } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { id } = params as PostParams;
  const postData = await getPostData(id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
