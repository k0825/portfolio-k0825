import { GalleryList } from "@/components/gallery/GalleryList";
import { getGalleryImageList } from "@/data/galleryImage";

export default async function Gallery() {
  const { images } = await getGalleryImageList();

  return (
    <div>
      <h1>Gallery</h1>
      <GalleryList images={images} />
    </div>
  );
}
