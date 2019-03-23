import styles from './Header.module.css';
import React from 'react';

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.headerWrapper}>
      <a href="/" className={styles.logoLink}>
        <span className={styles.logoText}>
          photography <span className={styles.love}>♥</span>
        </span>
        <span className={styles.logoMainText}>MIKHAIL SHATIKHIN</span>
      </a>
    </div>
  </div>
);

export default Header;
