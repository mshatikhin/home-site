import styles from './Header.module.css';
import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
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
  }
}
