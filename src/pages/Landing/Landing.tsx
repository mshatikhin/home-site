import React from 'react';
import styles from '../Home/Home.module.css';

export const Landing: React.FC = () => (
  <main className={styles.landing}>
    <section className={styles.wrapper}>
      <section className={styles.header}>
        Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию!
      </section>
      <div className={styles.center}>
        <a target="blank" className={styles.btnRequest} href="//vk.me/id2069565">
          Хочу фотосессию
        </a>
      </div>
    </section>
  </main>
);
