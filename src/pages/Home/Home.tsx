import React from 'react';
import styles from './Home.module.css';
import { Slider } from '../../components/Slider';

const images = [
  require('./images/1.jpg'),
  require('./images/2.jpg'),
  require('./images/3.jpg'),
  require('./images/4.jpg'),
  require('./images/5.jpg'),
  require('./images/6.jpg'),
  require('./images/7.jpg'),
  require('./images/8.jpg'),
  require('./images/9.jpg'),
  require('./images/10.jpg'),
  require('./images/11.jpg'),
  require('./images/12.jpg'),
  require('./images/13.jpg'),
  require('./images/14.jpg'),
  require('./images/15.jpg'),
  require('./images/16.jpg'),
  require('./images/17.jpg'),
  require('./images/18.jpg'),
  require('./images/19.jpg'),
  require('./images/20.jpg'),
  require('./images/21.jpg')
];

const bestImages = [0, 1, 7, 9, 14, 15, 16, 18];

function getRandomArbitary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Home: React.FC = () => {
  const initSlide = bestImages[getRandomArbitary(1, bestImages.length)];
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Slider initialSlide={initSlide}>
          {images.map((img, index) => (
            <div key={index} className={styles.imgWrap}>
              <img src={img} className={styles.img} alt="Изображение" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
