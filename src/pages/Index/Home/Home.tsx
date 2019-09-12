import React from "react";
import styles from "./Home.module.css";
import Carousel from "react-images";

const images = [
  { source: require("./images/1.jpg") },
  { source: require("./images/2.jpg") },
  { source: require("./images/3.jpg") },
  { source: require("./images/4.jpg") },
  { source: require("./images/5.jpg") },
  { source: require("./images/6.jpg") },
  { source: require("./images/7.jpg") },
  { source: require("./images/8.jpg") },
  { source: require("./images/9.jpg") },
  { source: require("./images/10.jpg") },
  { source: require("./images/11.jpg") },
  { source: require("./images/12.jpg") },
  { source: require("./images/13.jpg") },
  { source: require("./images/14.jpg") },
  { source: require("./images/15.jpg") },
  { source: require("./images/16.jpg") },
  { source: require("./images/17.jpg") },
  { source: require("./images/18.jpg") },
  { source: require("./images/19.jpg") },
  { source: require("./images/20.jpg") },
  { source: require("./images/21.jpg") },
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
