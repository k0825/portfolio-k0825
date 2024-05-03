import {
  GalleryImage,
  getGalleryImage,
  getGalleryImageListRemote,
} from "@/data/galleryImage";
import { NextRequest, NextResponse } from "next/server";

type Params = {
  id: string;
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const { images } = await getGalleryImageListRemote();
  const paths = images.map((image) => {
    return {
      id: image.id,
    };
  });

  return [...paths];
};

type ErrorMessage = {
  message: string;
};

export const GET = async (
  req: NextRequest,
  { params }: { params: Params }
): Promise<NextResponse<GalleryImage | ErrorMessage>> => {
  const { id } = params;
  try {
    const response = await getGalleryImage(id);
    return NextResponse.json(response);
  } catch (e) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
