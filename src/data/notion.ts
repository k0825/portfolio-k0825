import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  PartialDatabaseObjectResponse,
  PartialPageObjectResponse,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints";

const client = new Client({
  auth: process.env.NOTION_TOKEN,
});

type GetDatabaseResults = {
  items: (
    | DatabaseObjectResponse
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
  )[];
};

type GetPageResults = {
  item: GetPageResponse;
};

type GetBlocksResults = {
  items: (PartialBlockObjectResponse | BlockObjectResponse)[];
};

// const databaseId = "808ffdcf244942e8a2084fcf751f91b8";

export const getDatabase = async (
  databaseId: string
): Promise<GetDatabaseResults> => {
  const response = await client.databases.query({
    database_id: databaseId,
    page_size: 10,
    filter: {
      and: [
        {
          property: "Published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "CreatedAt",
        direction: "descending",
      },
    ],
  });

  const resp = response.results;

  return {
    items: resp,
  };
};

export const getPage = async (pageId: string): Promise<GetPageResults> => {
  const response = await client.pages.retrieve({
    page_id: pageId,
  });

  return {
    item: response,
  };
};

export const getBlocks = async (blockId: string): Promise<GetBlocksResults> => {
  const blocks: (PartialBlockObjectResponse | BlockObjectResponse)[] = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await client.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return {
    items: blocks,
  };
};
