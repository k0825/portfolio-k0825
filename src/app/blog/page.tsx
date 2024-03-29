import { BlogList } from "@/components/blog/blogList/BlogList";
import { getBlogs } from "@/data/microcms";

export default async function Blog() {
  const { contents } = await getBlogs();

  return (
    <div>
      <h1>Blog</h1>
      <BlogList contents={contents} />
    </div>
  );
}
