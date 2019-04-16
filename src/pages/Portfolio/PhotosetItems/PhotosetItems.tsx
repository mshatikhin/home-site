import React from 'react';
import styles from './PhotosetItems.module.css';
import { Loader } from '../../../components/Loader';
import { Photo } from '../types';

interface Props {
  photos: Photo[];
}

export const PhotosetItems: React.FC<Props> = ({ photos }) => {
  const urls = photos.map(
    photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`
  );
  return urls.length == 0 ? (
    <Loader />
  ) : (
    <div className={styles.wrapper}>
      {urls.map((photoUrl, index) => (
        <img key={index} className={styles.mainImage} src={photoUrl} alt="Изображение" />
      ))}
    </div>
  );
};
