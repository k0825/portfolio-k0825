import {
  AttributeValue,
  DynamoDBClient,
  QueryCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { z } from "zod";

export type GalleryImage = {
  id: string;
  origin: string;
  thumb: string;
  height: number;
  width: number;
};

export type GalleryImageData = {
  images: GalleryImage[];
};

export const getGalleryImage = async (id: string): Promise<GalleryImage> => {
  const dynamodb = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: process.env.AWS_DEFAULT_REGION || "",
  });
  const tableName = "ikari_photo_library_mapping_table";
  const response = await dynamodb.send(
    new QueryCommand({
      TableName: tableName,
      KeyConditionExpression: "id = :id",
      ExpressionAttributeValues: {
        ":id": { S: id },
      },
    })
  );

  const items = response.Items || [];
  const item = items[0];

  return {
    id: item.id.S || "",
    origin: item.original_path.S || "",
    thumb: item.thumbnail_path.S || "",
    height: parseInt(item.height.N || "0"),
    width: parseInt(item.width.N || "0"),
  };
};

export const getGalleryImageList = async (): Promise<GalleryImageData> => {
  const dynamodb = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: process.env.AWS_DEFAULT_REGION || "",
  });
  const tableName = "ikari_photo_library_mapping_table";

  const items: Record<string, AttributeValue>[] = [];
  const query = async (exclusiveStartKey?: Record<string, AttributeValue>) => {
    const response = await dynamodb.send(
      new ScanCommand({
        TableName: tableName,
        ExclusiveStartKey: exclusiveStartKey,
      })
    );

    items.push(...(response.Items || []));

    if (response.LastEvaluatedKey) {
      await query(response.LastEvaluatedKey);
    }
  };

  await query();

  const images = items.map((item) => {
    return {
      id: item.id.S || "",
      origin: item.original_path.S || "",
      thumb: item.thumbnail_path.S || "",
      height: parseInt(item.height.N || "0"),
      width: parseInt(item.width.N || "0"),
    };
  });

  return { images };
};

const galleryImageParser = z.object({
  id: z.string(),
  origin: z.string(),
  thumb: z.string(),
  height: z.number(),
  width: z.number(),
});

export const getGalleryImageRemote = async (id: string) => {
  const json = await fetch(`/api/image/${id}`).then(
    (res) => res.json()
  );
  const response = galleryImageParser.parse(json);
  return response;
};

const galleryImageListParser = z.object({
  images: z.array(galleryImageParser),
});

export const getGalleryImageListRemote = async () => {
  const json = await fetch("/api/image/list").then((res) =>
    res.json()
  );
  const response = galleryImageListParser.parse(json);
  return response;
};
