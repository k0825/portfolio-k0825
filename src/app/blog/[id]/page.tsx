import parse from "html-react-parser";

import { getBlogs, getDetail } from "@/data/microcms";

type BlogDetailPageProps = {
  params: {
    id: string;
  };
};

export const getStaticParams = async () => {
  const { contents } = await getBlogs();

  const paths = contents.map((post) => {
    return {
      id: post.id,
    };
  });

  return [...paths];
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = params;
  const blog = await getDetail(id);

  const content = parse(blog.content);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div>{content}</div>
    </div>
  );
}
