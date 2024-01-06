import dayjs from "dayjs";
import Parser from "rss-parser";

type PostItem = {
  title: string;
  data: string;
  link: string;
};

type Posts = {
  pagePosts: PostItem[];
  totalCount: number;
};

export const getPosts = async (): Promise<Posts> => {
  const feed = await new Parser().parseURL("https://zenn.dev/ikarin0825/feed");
  const items: PostItem[] = feed.items.map((item) => {
    return {
      title: item.title ?? "",
      data: item.pubDate ? dayjs(item.pubDate).format("YYYY/MM/DD") : "",
      link: item.link ?? "https://zenn.dev/ikarin0825",
    };
  });

  return {
    pagePosts: items,
    totalCount: items.length,
  };
};
