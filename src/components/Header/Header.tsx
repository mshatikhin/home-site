import styles from './Header.module.css';
import React from 'react';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.headerWrapper}>
      <a href="/" className={styles.logoLink}>
        <span className={styles.logoText}>
          photography <span className={styles.love}>♥</span>
        </span>
        <span className={styles.logoMainText}>MIKHAIL SHATIKHIN</span>
      </a>
    </div>
  </header>
);
