import { getGalleryImage, getGalleryImageList } from "@/data/galleryImage";
import { Photo } from "../../../../components/gallery/Photo";

type Params = {
  id: string;
};

export const generateStaticParams = async (): Promise<Params[]> => {
  const { images } = await getGalleryImageList();
  const paths = images.map((image) => {
    return {
      id: image.id,
    };
  });

  return [...paths];
};

type PhotoPageProps = {
  params: Params;
};

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = params;

  const { image } = await getGalleryImage(id);

  return (
    <div>
      <Photo image={image} />
    </div>
  );
}
