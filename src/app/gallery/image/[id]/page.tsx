import { getGalleryImage, getGalleryImageList } from "@/data/galleryImage";
import Image from "next/image";

import styles from "./page.module.scss";

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
  const image_cdn_domain = process.env.IMAGE_CDN_DOMAIN ?? "";

  const { id } = params;

  const { image } = await getGalleryImage(id);

  return (
    <div style={{ position: "relative", width: "100%", maxHeight: "100%" }}>
      <Image
        src={`${image_cdn_domain}/${image.thumb}`}
        objectFit="contain"
        alt={image.id}
        height={image.height}
        width={image.width}
        className={styles.photo}
      />
    </div>
  );
}
