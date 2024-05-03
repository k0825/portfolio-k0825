import { GalleryImage } from "@/data/galleryImage";
import { Grid, GridCol } from "@mantine/core";
import { Photo } from "./Photo";

type GalleryListProps = {
  images: GalleryImage[];
};

export const GalleryList = ({ images }: GalleryListProps): JSX.Element => {
  return (
    <Grid>
      {images.map((image) => (
        <GridCol key={image.id} span={4}>
          <Photo image={image} displayWidth={300} />
        </GridCol>
      ))}
    </Grid>
  );
};
