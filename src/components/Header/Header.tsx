import styles from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

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
    <nav className={styles.menu}>
      <ul>
        <li>
          <NavLink
            aria-current={'page'}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
            to={routes.root}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            aria-current={'page'}
            className={styles.link}
            activeClassName={styles.activeLink}
            to={routes.portfolio}
          >
            portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
