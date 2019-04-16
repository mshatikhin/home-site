import * as React from 'react';
import { PhotosetAlbum } from './types';
import styles from './Portfolio.module.css';

interface Props {
  photoset: PhotosetAlbum;
  onLoadPhotoset: (id: string) => () => void;
}

export const PhotosetAlbumItem: React.FC<Props> = ({ photoset, onLoadPhotoset }) => {
  const additionalClass =
    photoset.primary_photo_extras.width_z - photoset.primary_photo_extras.height_z > 0
      ? styles.horizontalImage
      : styles.verticalImage;

  return (
    <div key={photoset.id} className={styles.card} onClick={onLoadPhotoset(photoset.id)} title="Смотреть серию">
      <div className={styles.meta}>
        <header className={styles.header}>{photoset.title._content}</header>
        <span className={styles.countPhotos}>{photoset.photos} photos</span>
      </div>
      <img
        className={`${styles.mainImage} ${additionalClass}`}
        src={photoset.primary_photo_extras.url_z}
        width={photoset.primary_photo_extras.width_z}
        height={photoset.primary_photo_extras.height_z}
      />
    </div>
  );
};
