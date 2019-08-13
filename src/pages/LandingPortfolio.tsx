import React from 'react';
import styles from './Home/Home.module.css';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

export const LandingPortfolio: React.FC = () => (
  <main className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <Link className={styles.btnRequest} to={routes.portfolio}>
          Посмотреть портфолио
        </Link>
      </div>
    </div>
  </main>
);
