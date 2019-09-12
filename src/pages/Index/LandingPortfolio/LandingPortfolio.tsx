import React from "react";
import styles from "../Landing/Landing.module.css";
import { routes } from "../../../routes";
import { LinkButton } from "../../../components/Button/LinkButton";

export const LandingPortfolio: React.FC = () => (
  <main className={styles.landing}>
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <LinkButton to={routes.portfolio}>Посмотреть портфолио</LinkButton>
      </div>
    </div>
  </main>
);
