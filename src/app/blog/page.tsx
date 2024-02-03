import { getBlogs } from "@/data/microcms";

export default async function Blog() {
  const { contents } = await getBlogs();

  const time = new Date().toLocaleString();

  return (
    <div>
      <h1>Blog</h1>
      <p>{time}</p>
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
