// react
import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from 'react';
// libs
import classNames from 'classnames';
// styles
import styles from './Input.module.scss';

interface InputProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; // TODO change ?
  value?: string; // TODO change ?
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  border: 'full' | 'bottom' | 'fullWhite' | 'none';
  icon?: string;
  backgroundGrey?: boolean;
}

export const Input: FC<InputProps> = ({
  onChange,
  value,
  type,
  placeholder,
  label,
  border,
  icon,
  backgroundGrey,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    if (value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className={classNames(styles.form__group, styles.field)}>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        className={classNames(styles.form__field, {
          [styles.borderFull]: border === 'full',
          [styles.borderBottom]: border === 'bottom',
          [styles.borderFullWhite]: border === 'fullWhite',
          [styles.backgroundGrey]: backgroundGrey,
        })}
        placeholder={placeholder}
        value={value}
      />
      {icon && <img src={icon} alt="icon" className={styles.image} />}
      <label
        onClick={onFocus}
        className={classNames(styles.form__label, {
          [styles.active]: isFocused,
        })}>
        {label}
      </label>
    </div>
  );
};
