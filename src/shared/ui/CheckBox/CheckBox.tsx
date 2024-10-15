// react
import { FC } from 'react';

import styles from './CheckBox.module.scss';

interface CheckBoxProps {
  text: string;
}

export const CheckBox: FC<CheckBoxProps> = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.container}>
        {text}
        <input type={'checkbox'} className={styles.checkbox} />

        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
};
