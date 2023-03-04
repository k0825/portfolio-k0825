import { ParsedUrlQuery } from "querystring";

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";

import { getPostData, getPostsData } from "@/lib/post";
import utilStyles from "@/styles/utils.module.scss";
import { Header } from "@/components/Header/Header";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

interface PostParams extends ParsedUrlQuery {
  id: string;
}

export const Post = ({ postData }: PostProps) => {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Header />
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>{postData.createdAt}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>
    </div>
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
