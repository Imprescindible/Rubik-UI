// react
import { FC, ReactNode } from 'react';
// libs
import classnames from 'classnames';
// styles
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  textColor?: 'red' | 'white' | 'black';
  colorVariant?: 'red' | 'white' | 'black';
  size?: 'sizeS' | 'sizeM';
  disabled?: boolean;
  icon?: ReactNode;
  isDarkMode?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  textColor = 'white',
  colorVariant = 'red',
  size = 'sizeS',
  icon,
  isDarkMode = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classnames(styles.btn, {
        [styles.textRed]: textColor === 'red',
        [styles.textWhite]: textColor === 'white',
        [styles.textBlack]: textColor === 'black',
        [styles.red]: colorVariant === 'red',
        [styles.white]: colorVariant === 'white',
        [styles.black]: colorVariant === 'black',
        [styles.sizeS]: size === 'sizeS',
        [styles.sizeM]: size === 'sizeM',
        [styles.darkMode]: isDarkMode,
      })}>
      {icon}
      {children}
    </button>
  );
};
