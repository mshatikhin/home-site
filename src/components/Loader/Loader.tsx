import React from "react";
import styles from "./Loader.module.css";

export const Loader: React.FC = () => (
  <div className={styles.cssload_container}>
    <div className={styles.cssload_circle} />
  </div>
);
