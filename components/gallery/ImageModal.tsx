import { GalleryImage } from "@/data/galleryImage";
import styles from "./ImageModal.module.scss";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage;
  prev: () => void;
  next: () => void;
};

export const ImageModal = ({
  isOpen,
  onClose,
  image,
  prev,
  next,
}: ImageModalProps): JSX.Element => {
  return (
    <div>
      {isOpen && (
        <>
          <div className={styles.container} onClick={onClose}>
            <img
              src={`https://d1lyij0osd7mgq.cloudfront.net/${image.thumb}`}
              alt={image.id}
              className={styles.photo}
              loading="lazy"
              decoding="async"
            />
          </div>
          <ActionIcon onClick={prev}>
            <IconChevronLeft />
          </ActionIcon>
          <ActionIcon onClick={next}>
            <IconChevronRight />
          </ActionIcon>
        </>
      )}
    </div>
  );
};
