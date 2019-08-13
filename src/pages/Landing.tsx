import React from 'react';
import styles from './Home/Home.module.css';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => (
  <main className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию! 📷
      </div>
      <div className={styles.center}>
        <Link target="blank" className={styles.btnRequest} to="//vk.me/id2069565">
          Хочу фотосессию
        </Link>
      </div>
    </div>
  </main>
);
