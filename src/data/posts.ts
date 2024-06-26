import { cache } from "react";
import dayjs from "dayjs";
import Parser from "rss-parser";

type PostItem = {
  title: string;
  date: string;
  link: string;
};

type Posts = {
  pagePosts: PostItem[];
  totalCount: number;
};

export const getPosts = cache(async (): Promise<Posts> => {
  const feed = await new Parser().parseURL("https://zenn.dev/ikarin0825/feed");
  const items: PostItem[] = feed.items.map((item) => {
    return {
      title: item.title ?? "",
      date: item.pubDate ? dayjs(item.pubDate).format("YYYY-MM-DD") : "",
      link: item.link ?? "https://zenn.dev/ikarin0825",
    };
  });

  return {
    pagePosts: items,
    totalCount: items.length,
  };
});
