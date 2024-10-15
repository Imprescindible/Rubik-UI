// react
import { FC } from 'react';
import { Link } from 'react-router-dom';
// configs
import { routeConfig } from '@/app/config/routeConfig/routeConfig';
// ui
import { Button } from '@/shared/ui/Button/Button';
// styles
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  return (
    <div className={styles.NotFound}>
      <div className={styles.wrapper}>
        <p className={styles.text}>404 Not Found</p>

        <p className={styles.string}>
          Your visited page not found. You may go home page
        </p>
      </div>
      <div className={styles.btn}>
        <div className={styles.asd}>
          <Link to={routeConfig.home}>
            <Button
              onClick={() => {}}
              textColor="black"
              colorVariant="white"
              size="sizeM">
              Back to home page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
