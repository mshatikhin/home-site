import React from "react";
import styles from "./Home.module.css";
import Carousel from "react-images";

import source1 from "./images/1.jpg";
import source2 from "./images/2.jpg";
import source3 from "./images/3.jpg";
import source4 from "./images/4.jpg";
import source5 from "./images/5.jpg";
import source6 from "./images/6.jpg";
import source7 from "./images/7.jpg";
import source8 from "./images/8.jpg";
import source9 from "./images/9.jpg";
import source10 from "./images/10.jpg";
import source11 from "./images/11.jpg";
import source12 from "./images/12.jpg";
import source13 from "./images/13.jpg";
import source14 from "./images/14.jpg";
import source15 from "./images/15.jpg";
import source16 from "./images/16.jpg";
import source17 from "./images/17.jpg";
import source18 from "./images/18.jpg";
import source19 from "./images/19.jpg";
import source20 from "./images/20.jpg";
import source21 from "./images/21.jpg";

const images = [
  { source: source1 },
  { source: source2 },
  { source: source3 },
  { source: source4 },
  { source: source5 },
  { source: source6 },
  { source: source7 },
  { source: source8 },
  { source: source9 },
  { source: source10 },
  { source: source11 },
  { source: source12 },
  { source: source13 },
  { source: source14 },
  { source: source15 },
  { source: source16 },
  { source: source17 },
  { source: source18 },
  { source: source19 },
  { source: source20 },
  { source: source21 },
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
