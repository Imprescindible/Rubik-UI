// react
import { FC } from 'react';

// styles
import styles from './HeaderLine.module.scss';
import { LanguageSwitcher } from '@/widgets/LanguageSwitcher';

interface HeaderLineProps {}

export const HeaderLine: FC<HeaderLineProps> = ({}) => {
  return (
    <div className={styles.HeaderLine}>
      <div>
        <span>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>
        <div>ShopNow</div>
      </div>
      <div className={styles.rightSide}>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
