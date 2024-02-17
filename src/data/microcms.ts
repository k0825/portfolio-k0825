import {
  createClient,
  MicroCMSQueries,
  type MicroCMSDate,
  type MicroCMSImage,
  MicroCMSListResponse,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  description: string;
  eyecatch: MicroCMSImage;
  category: string[];
} & MicroCMSDate;

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

export const client = createClient({
  serviceDomain: serviceDomain,
  apiKey: apiKey,
});

export const getBlogs = async (
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<Blog>> => {
  const data = await client.getList<Blog>({ endpoint: "blogs", queries });
  return data;
};

export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<Blog & MicroCMSContentId> => {
  const data = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });
  return data;
};
