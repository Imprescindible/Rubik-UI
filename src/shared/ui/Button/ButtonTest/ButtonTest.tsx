// react
import { FC, ReactNode } from 'react';
// styles
import styles from './ButtonTest.module.scss';
import classNames from 'classnames';

interface ButtonTestProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;

  heightSize?: 'S' | 'M' | 'L';
  backgroundVariant?: 'black' | 'red' | 'transparent' | 'green';
  isBorder?: boolean;
  borderRadiusVariant?: 'full' | 'bottom';
  textColor?: 'white' | 'black';
  icon?: ReactNode;
  maxWidth?: number | string;
}

export const ButtonTest: FC<ButtonTestProps> = ({
  children,
  onClick,
  disabled,
  icon,
  maxWidth = '235px',
  backgroundVariant = 'red',
  borderRadiusVariant = 'full',
  heightSize = 'L',
  textColor = 'white',
  isBorder = false,
}) => {
  return (
    <button
      className={classNames(styles.ButtonTest, {
        [styles.heightSizeS]: heightSize === 'S',
        [styles.heightSizeM]: heightSize === 'M',
        [styles.heightSizeL]: heightSize === 'L',
        [styles.backgroundVariantRed]: backgroundVariant === 'red',
        [styles.backgroundVariantBlack]: backgroundVariant === 'black',
        [styles.backgroundVariantGreen]: backgroundVariant === 'green',
        [styles.backgroundVariantTransparent]:
          backgroundVariant === 'transparent',
        [styles.borderRadiusVariantFull]: borderRadiusVariant === 'full',
        [styles.borderRadiusVariantBottom]: borderRadiusVariant === 'bottom',
        [styles.textColorBlack]: textColor === 'black',
        [styles.textColorWhite]: textColor === 'white',
        [styles.isBorder]: isBorder,
      })}
      onClick={onClick}
      disabled={disabled}
      style={{ maxWidth: maxWidth }}>
      {children}
    </button>
  );
};
