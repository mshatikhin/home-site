import React from "react";
import styles from "./Home.module.css";
import Carousel from "react-images";

const images = [
  { src: require("./images/1.jpg") },
  { src: require("./images/2.jpg") },
  { src: require("./images/3.jpg") },
  { src: require("./images/4.jpg") },
  { src: require("./images/5.jpg") },
  { src: require("./images/6.jpg") },
  { src: require("./images/7.jpg") },
  { src: require("./images/8.jpg") },
  { src: require("./images/9.jpg") },
  { src: require("./images/10.jpg") },
  { src: require("./images/11.jpg") },
  { src: require("./images/12.jpg") },
  { src: require("./images/13.jpg") },
  { src: require("./images/14.jpg") },
  { src: require("./images/15.jpg") },
  { src: require("./images/16.jpg") },
  { src: require("./images/17.jpg") },
  { src: require("./images/18.jpg") },
  { src: require("./images/19.jpg") },
  { src: require("./images/20.jpg") },
  { src: require("./images/21.jpg") },
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
