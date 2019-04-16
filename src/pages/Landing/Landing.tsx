import React from 'react';
import styles from '../Home/Home.module.css';

export const Landing: React.FC = () => (
  <div className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию!
      </div>
      <div className={styles.center}>
        <a target="blank" className={styles.btnRequest} href="//vk.me/id2069565">
          Записаться!
        </a>
      </div>
    </div>
  </div>
);
