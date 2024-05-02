import { GalleryImageData, getGalleryImageList } from "@/data/galleryImage";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

type ErrorMessage = {
  message: string;
};

export const GET = async (
  req: NextRequest
): Promise<NextResponse<GalleryImageData | ErrorMessage>> => {
  const searchParams = req.nextUrl.searchParams;
  try {
    const limit = z
      .string()
      .transform((val) => parseInt(val))
      .parse(searchParams.get("limit"));
    const startsKey = z
      .string()
      .nullable()
      .parse(searchParams.get("startsKey"));

    const response = await getGalleryImageList(limit, null);
    return NextResponse.json(response);
  } catch (e) {
    if (e instanceof z.ZodError) {
      console.error("Invalid query parameter");
    } else if (e instanceof Error) {
      console.error(e);
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
