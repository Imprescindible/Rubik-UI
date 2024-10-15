// react
import { FC, ReactNode } from 'react';
// styles
import styles from './Services.module.scss';

interface ServicesProps {
  icon: ReactNode;
  text: string;
  price: string;
}

export const Services: FC<ServicesProps> = ({ icon, text, price }) => {
  return (
    <div className={styles.Services}>
      <div className={styles.itemWrapper}>
        <div className={styles.icon}>
          <div>{icon}</div>
        </div>
        <p>{text}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};
