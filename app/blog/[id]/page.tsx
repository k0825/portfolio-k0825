import { BlogContent } from "@/components/blog/blogContent/BlogContent";
import { getBlogs, getDetail } from "@/data/microcms";

type Params = {
  id: string;
};

type BlogDetailPageProps = {
  params: Params;
};

export const generateStaticParams = async (): Promise<Params[]> => {
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

  return (
    <div>
      <h1>{blog.title}</h1>
      <BlogContent content={blog.content} />
    </div>
  );
}
