// react
import { FC } from 'react';
// styles
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  text: string;
}

export const RadioButton: FC<RadioButtonProps> = ({ text }) => {
  return (
    <div className={styles.RadioButton}>
      <label>
        <input type="radio" className={styles.radio} />
        <div>{text}</div>
      </label>
    </div>
  );
};
