import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

export type GalleryImage = {
  id: string;
  origin: string;
  thumb: string;
};

export type GalleryImageData = {
  images: GalleryImage[];
  lastEvaluatedKey?: string;
};

export const getGalleryImageList = async (
  limit: number,
  startsKey: string | null
): Promise<GalleryImageData> => {
  const dynamodb = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: process.env.AWS_DEFAULT_REGION || "",
  });
  const tableName = "ikari_photo_library_mapping_table";
  const response = await dynamodb.send(
    new ScanCommand({
      TableName: tableName,
      Limit: limit,
      ExclusiveStartKey: startsKey ? { id: { S: startsKey } } : undefined,
    })
  );

  const items = response.Items || [];
  const images = items.map((item) => {
    return {
      id: item.id.S || "",
      origin: item.original_path.S || "",
      thumb: item.thumbnail_path.S || "",
    };
  });

  const lastEvaluatedKey = response.LastEvaluatedKey?.id.S;

  return { images, lastEvaluatedKey };
};
