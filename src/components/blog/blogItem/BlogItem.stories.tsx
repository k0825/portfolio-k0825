import { BlogItem } from "./BlogItem";

export default {
  component: BlogItem,
  title: "BlogItem",
};

export const Default = (): JSX.Element => (
  <BlogItem
    id="sample-id"
    title="サンプルタイトル"
    description="サンプルディスクリプション"
  />
);
