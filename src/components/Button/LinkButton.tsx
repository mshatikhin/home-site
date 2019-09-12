import styles from "./Button.module.css";
import { Link } from "react-router-dom";
import * as React from "react";

interface Props {
  to: string;
  target?: string;
}

export const LinkButton: React.FC<Props> = ({ children, to, target }) => (
  <Link className={styles.btnRequest} to={to} target={target}>
    {children}
  </Link>
);
