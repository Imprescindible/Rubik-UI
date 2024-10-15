// enteties
import { CategoryItem } from '@/enteties/CategoryItem';
// assets
import Phone from '@/shared/assets/svg/CategoryCellPhone.svg?react';
import Headphone from '@/shared/assets/svg/CategoryHeadphone.svg?react';
import Gamepad from '@/shared/assets/svg/CategoryGamepad.svg?react';
import Computer from '@/shared/assets/svg/CategoryComputer.svg?react';
import Camera from '@/shared/assets/svg/CategoryCamera1.svg?react';
import Smartwatch from '@/shared/assets/svg/SmartWatch.svg?react';
// styles
import styles from './CategoriesList.module.scss';

export const CategoriesList = ({}) => {
  return (
    <div className={styles.Categories}>
      <div className={styles.header}>
        <div className={styles.square}></div>
        <div className={styles.headerName}>Categories</div>
      </div>
      <div className={styles.browse}>
        <div>
          <h2>Browse By Category</h2>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <CategoryItem name={'Phone'} icon={<Phone />} />
        <CategoryItem name={'HeadPhones'} icon={<Headphone />} />
        <CategoryItem name={'Gaming'} icon={<Gamepad />} />
        <CategoryItem name={'Computer'} icon={<Computer />} />
        <CategoryItem name={'Camera'} icon={<Camera />} />
        <CategoryItem name={'SmartWatch'} icon={<Smartwatch />} />
      </div>
    </div>
  );
};
