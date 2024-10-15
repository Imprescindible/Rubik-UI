// react
import { useState } from 'react';
import { FC } from 'react';
// libs
import classNames from 'classnames';
// styles
import styles from './Slider.module.scss';

interface SliderProps {
    className: string;
}


export const Slider: FC<SliderProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://picsum.photos/id/238/892/344',
    'https://picsum.photos/id/239/892/344',
    'https://picsum.photos/id/231/892/344',
    'https://picsum.photos/id/232/892/344',
    'https://picsum.photos/id/233/892/344',
  ];

  return (
    <div>
      <div className={className} style={{ position: 'relative' }}>
        <img
          src={images[currentIndex]}
          className={styles.image}
          alt={`Slide ${currentIndex}`}
        />

        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={classNames(styles.dot, {
                [styles.active]: currentIndex === index,
              })}
              onClick={() => setCurrentIndex(index)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};
