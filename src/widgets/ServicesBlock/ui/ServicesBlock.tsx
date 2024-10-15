// react
import { FC } from 'react';
// enteties
import { Services } from '@/enteties/Sirveces';
// assets
import Delivery from '@/shared/assets/svg/Delivery.svg?react';
import HeadphoneServices from '@/shared/assets/svg/HeadphoneServices.svg?react';
import ShieldTick from '@/shared/assets/svg/ShieldTick.svg?react';
// styles
import styles from './ServicesBlock.module.scss';

interface ServicesBlockProps {}

export const ServicesBlock: FC<ServicesBlockProps> = ({}) => {
  return (
    <div className={styles.ServicesBlock}>
      <Services
        icon={<Delivery />}
        text={'FREE AND FAST DELIVERY'}
        price={'Free delivery for all orders over $140'}
      />
      <Services
        icon={<HeadphoneServices />}
        text={'24/7 CUSTOMER SERVICE'}
        price={'Friendly 24/7 customer support'}
      />
      <Services
        icon={<ShieldTick />}
        text={'MONEY BACK GUARANTEE'}
        price={'We return money within 30 days'}
      />
    </div>
  );
};
