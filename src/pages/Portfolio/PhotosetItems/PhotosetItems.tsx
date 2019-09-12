import React from "react";
import styles from "./PhotosetItems.module.css";
import { Loader } from "../../../components/Loader";
import { Photo } from "../types";
import Carousel, { Modal, ModalGateway } from "react-images";

interface Props {
  photos: Photo[];
}

export const PhotosetItems: React.FC<Props> = React.memo(({ photos }) => {
  const [currentIndex, setCurrentImage] = React.useState(0);
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false);

  const images = photos.map(photo => ({
    source: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`,
  }));

  if (images.length === 0) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      {images.map((image, index) => (
        <img
          key={index}
          className={styles.image}
          src={image.source}
          alt={"Изображение " + index}
          onClick={() => handleOpenModal(index)}
        />
      ))}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={handleCloseModal}>
            <Carousel currentIndex={currentIndex} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );

  function handleOpenModal(index: number) {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }

  function handleCloseModal() {
    setCurrentImage(0);
    setViewerIsOpen(false);
  }
});
