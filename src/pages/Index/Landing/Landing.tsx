import React from 'react';
import styles from './Landing.module.css';
import { LinkButton } from '../../../components/Button/LinkButton';

export const Landing: React.FC = () => (
  <main className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Желаете примерить на себе интересный образ или просто замечательных фотографий? Записывайтесь на фотосессию!{' '}
        <span role="img" aria-label={'image'}>
          📷
        </span>
      </div>
      <div className={styles.center}>
        <LinkButton target="blank" to={'//vk.me/id2069565'}>
          Хочу фотосессию
        </LinkButton>
      </div>
    </div>
  </main>
);
