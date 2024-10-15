// react
import { FC } from 'react';
// config
import { routeConfig } from '@/app/config/routeConfig/routeConfig';
// libs
import { useTranslation } from 'react-i18next';
// assets
import Cart from '@/shared/assets/svg/basket.svg?react';
import WishList from '@/shared/assets/svg/heartSmall.svg?react';
// ui
import { HeaderLine } from '../HeaderLine/HeaderLine';
import { InputSearch } from '../InputSearch/InputSearch';
import { NavLink } from '@/shared/ui/NavLink';
import { IconButton } from '@/shared/ui/IconButton';
// styles
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const { t } = useTranslation('Header');

  return (
    <>
      <HeaderLine />
      <div className={styles.wrapper}>
        <div className={styles.Header}>
          <div className={styles.logo}>Exclusive</div>
          <div className={styles.headerLinks}>
            <ul>
              <li>
                <NavLink to={routeConfig.home}>{t('home')}</NavLink>
              </li>
              <li>
                <NavLink to={routeConfig.contact}>{t('contact')}</NavLink>
              </li>
              <li>
                <NavLink to={routeConfig.about}>{t('about')}</NavLink>
              </li>
              <li>
                <NavLink to={routeConfig.signUp}>{t('signUp')}</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.rightSide}>
            <InputSearch placeholder="What are you looking for?" />
            <div className={styles.icons}>
              <IconButton onClick={() => {}}>
                <WishList />
              </IconButton>
              <IconButton onClick={() => {}}>
                <Cart />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
