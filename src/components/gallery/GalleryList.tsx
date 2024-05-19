"use client";
import { GalleryImage } from "@/data/galleryImage";
import { SimpleGrid } from "@mantine/core";
import Image from "next/image";

import styles from "./GalleryList.module.scss";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

type GalleryListProps = {
  images: GalleryImage[];
};

export const GalleryList = ({ images }: GalleryListProps): JSX.Element => {
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const modalOpen = (index: number) => {
    setDisplayIndex(index);
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  const handlePrevImage = () => {
    if (displayIndex > 0) {
      setDisplayIndex(displayIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (displayIndex < images.length - 1) {
      setDisplayIndex(displayIndex + 1);
    }
  };

  return (
    <>
      <SimpleGrid
        cols={{ base: 2, sm: 2, md: 3, lg: 3 }}
        spacing={"sm"}
        verticalSpacing={"sm"}
      >
        {images.map(({ id, thumb }, index) => (
          <Image
            key={id}
            src={`https://d1lyij0osd7mgq.cloudfront.net/${thumb}`}
            alt={id}
            height={300}
            width={300}
            style={{ objectFit: "cover" }}
            className={styles.photo}
            onClick={() => modalOpen(index)}
          />
        ))}
      </SimpleGrid>
      <ImageModal
        isOpen={isModalOpen}
        onClose={modalClose}
        image={images[displayIndex]}
        prev={handlePrevImage}
        next={handleNextImage}
      />
    </>
  );
};
