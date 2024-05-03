import { GalleryImage } from "@/data/galleryImage";
import { Grid, GridCol } from "@mantine/core";
import Image from "next/image";

import styles from "./GalleryList.module.scss";

type GalleryListProps = {
  images: GalleryImage[];
};

export const GalleryList = ({ images }: GalleryListProps): JSX.Element => {
  const image_cdn_domain = process.env.IMAGE_CDN_DOMAIN ?? "";
  return (
    <Grid>
      {images.map(({ id, thumb }) => (
        <GridCol key={id} span={4}>
          <a href={`/gallery/image/${id}`}>
            <Image
              key={id}
              src={`${image_cdn_domain}/${thumb}`}
              alt={id}
              height={300}
              width={300}
              style={{ objectFit: "cover" }}
              className={styles.photo}
            />
          </a>
        </GridCol>
      ))}
    </Grid>
  );
};
