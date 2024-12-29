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
  const items: PostItem[] = feed.items.map(({ title, pubDate, link }) => {
    return {
      title: title ?? "",
      date: pubDate ? dayjs(pubDate).format("YYYY-MM-DD") : "",
      link: link ?? "https://zenn.dev/ikarin0825",
    };
  });

  return {
    pagePosts: items,
    totalCount: items.length,
  };
});
