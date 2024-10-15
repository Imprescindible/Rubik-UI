// react
import { ChangeEvent, FC } from 'react';
// styles
import styles from './InputNumber.module.scss';

interface InputNumberProps {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  min: number;
}

export const InputNumber: FC<InputNumberProps> = ({ value, onChange, min }) => {
  return (
    <div>
      <input
        type="number"
        className={styles.InputNumber}
        min={min}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
