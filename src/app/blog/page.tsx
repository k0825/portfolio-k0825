import { getBlogs } from "@/data/microcms";

export default async function Blog() {
  const { contents } = await getBlogs();

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {contents.map((blog) => (
          <li key={blog.id}>
            <a href={`/blog/${blog.id}`}>{blog.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
