import { GalleryImageData, getGalleryImageList } from "@/data/galleryImage";
import { NextRequest, NextResponse } from "next/server";

type ErrorMessage = {
  message: string;
};

export const GET = async (
  req: NextRequest
): Promise<NextResponse<GalleryImageData | ErrorMessage>> => {
  try {
    const response = await getGalleryImageList();
    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
