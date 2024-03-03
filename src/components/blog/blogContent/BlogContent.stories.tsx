import { BlogContent } from "./BlogContent";

export default {
  component: BlogContent,
  title: "BlogContent",
};

const content = "<h1>サンプルタイトル</h1><p>hogehogehoge</p>";

export const Default = (): JSX.Element => <BlogContent content={content} />;
