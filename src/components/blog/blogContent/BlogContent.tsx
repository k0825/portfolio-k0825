import parse from "html-react-parser";

type BlogContentProps = {
  content: string;
};

export const BlogContent = ({ content }: BlogContentProps) => {
  const blog = parse(content);
  return <div>{blog}</div>;
};
