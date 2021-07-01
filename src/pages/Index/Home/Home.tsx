import React from "react";
import styles from "./Home.module.css";
import Carousel from "react-images";

const images = [
  { source: require("./images/1.jpg").default },
  { source: require("./images/2.jpg").default },
  { source: require("./images/3.jpg").default },
  { source: require("./images/4.jpg").default },
  { source: require("./images/5.jpg").default },
  { source: require("./images/6.jpg").default },
  { source: require("./images/7.jpg").default },
  { source: require("./images/8.jpg").default },
  { source: require("./images/9.jpg").default },
  { source: require("./images/10.jpg").default },
  { source: require("./images/11.jpg").default },
  { source: require("./images/12.jpg").default },
  { source: require("./images/13.jpg").default },
  { source: require("./images/14.jpg").default },
  { source: require("./images/15.jpg").default },
  { source: require("./images/16.jpg").default },
  { source: require("./images/17.jpg").default },
  { source: require("./images/18.jpg").default },
  { source: require("./images/19.jpg").default },
  { source: require("./images/20.jpg").default },
  { source: require("./images/21.jpg").default },
];

export const Home: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Carousel views={images} trackProps={{ infinite: true }} components={{ Footer: null }} />
      </div>
    </section>
  );
};
