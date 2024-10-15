// react
import { FC } from 'react';

// styles
import styles from './InputSearch.module.scss';

import iconSearch from '@/shared/assets/svg/Search.svg';

interface InputSearchProps {
  placeholder: string;
}

export const InputSearch: FC<InputSearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder={placeholder} />
      <button className={styles.searchBtn}>
        <img src={iconSearch} className={styles.image} />
      </button>
    </div>
  );
};
