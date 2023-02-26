import { z } from "zod";

import { AllPostsData, PostData } from "@/types/post";

import { client } from "./client";

export const getPostsData = async (): Promise<AllPostsData> => {
  const postsDataParser = z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      createdAt: z.string(),
      eyecatch: z.object({ url: z.string() }),
    })
  );
  const data = await client.get({ endpoint: "blogs" });
  return postsDataParser.parse(data.contents);
};

export const getPostData = async (id?: string): Promise<PostData> => {
  const postDataParser = z.object({
    title: z.string(),
    createdAt: z.string(),
    content: z.string(),
  });
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return postDataParser.parse(data.contents);
};
