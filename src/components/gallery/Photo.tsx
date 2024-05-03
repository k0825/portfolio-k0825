import { GalleryImage } from "@/data/galleryImage";
import Image from "next/image";

import styles from "./Photo.module.scss";

type PhotoProps = {
  image: GalleryImage;
  displayWidth?: number;
};

export const Photo = ({ image, displayWidth }: PhotoProps): JSX.Element => {
  const { id, thumb, height, width } = image;
  const image_cdn_domain = process.env.IMAGE_CDN_DOMAIN ?? "";

  const displayHeight = displayWidth ? (height / width) * displayWidth : height;

  return (
    <div className={styles.container}>
      <Image
        key={image.id}
        src={`${image_cdn_domain}/${thumb}`}
        alt={id}
        className={styles.photo}
        fill
      />
    </div>
  );
};
