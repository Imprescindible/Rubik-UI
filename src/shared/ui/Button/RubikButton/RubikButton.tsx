// react
import { FC, ReactNode } from 'react';
import SmallLoadingIcon from '@/shared/assets/svg/SmallLoadingIcon.svg?react';
import classNames from 'classnames';
// styles
import styles from './RubikButton.module.scss';

interface RubikButtonProps {
  leftSideIcon?: ReactNode;
  children?: ReactNode;
  rightSideIcon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;

  buttonSize?: 'extraSmall';
  buttonColorVariant?: 'Accent' | 'Primary' | 'Danger';
  buttonTypeVariant?: 'Fill' | 'Outline' | 'Ghost' | 'Text';

  onClick: () => void;
}

export const RubikButton: FC<RubikButtonProps> = ({
  children,
  isDisabled,
  isLoading,
  leftSideIcon,
  rightSideIcon,
  onClick,
  buttonSize,
  buttonColorVariant = 'Accent',
  buttonTypeVariant = 'Fill',
}) => {
  return (
    <button
      className={classNames(styles.RubikButton, {
        [styles.buttonSizeExtraSmall]: buttonSize === 'extraSmall',
        [styles.accentFill]:
          buttonColorVariant === 'Accent' && buttonTypeVariant === 'Fill',
        [styles.accentOutline]:
          buttonColorVariant === 'Accent' && buttonTypeVariant === 'Outline',
        [styles.accentGhost]:
          buttonColorVariant === 'Accent' && buttonTypeVariant === 'Ghost',
        [styles.accentText]:
          buttonColorVariant === 'Accent' && buttonTypeVariant === 'Text',
        [styles.primaryFill]:
          buttonColorVariant === 'Primary' && buttonTypeVariant === 'Fill',
        [styles.primaryOutline]:
          buttonColorVariant === 'Primary' && buttonTypeVariant === 'Outline',
        [styles.primaryGhost]:
          buttonColorVariant === 'Primary' && buttonTypeVariant === 'Ghost',
        [styles.primaryText]:
          buttonColorVariant === 'Primary' && buttonTypeVariant === 'Text',
        [styles.dangerFill]:
          buttonColorVariant === 'Danger' && buttonTypeVariant === 'Fill',
        [styles.dangerOutline]:
          buttonColorVariant === 'Danger' && buttonTypeVariant === 'Outline',
        [styles.dangerGhost]:
          buttonColorVariant === 'Danger' && buttonTypeVariant === 'Ghost',
        [styles.dangerText]:
          buttonColorVariant === 'Danger' && buttonTypeVariant === 'Text',
      })}
      disabled={isDisabled}
      onClick={onClick}>
      {isLoading && (
        <span className={styles.icon}>
          <SmallLoadingIcon />
        </span>
      )}
      {leftSideIcon && !isLoading && (
        <span className={styles.icon}>{leftSideIcon}</span>
      )}
      {children}
      {rightSideIcon && !isLoading && (
        <span className={styles.icon}>{rightSideIcon}</span>
      )}
    </button>
  );
};
