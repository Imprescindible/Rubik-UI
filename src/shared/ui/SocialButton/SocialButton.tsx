// react
import { FC } from 'react';
// styles
import styles from './SocialButton.module.scss';
import classNames from 'classnames';

interface SocialButtonProps {
  icon: string;
  description: string;
  title: string;
}

export const SocialButton: FC<SocialButtonProps> = ({
  icon,
  description,
  title,
}) => {
  return (
    <button className={classNames(styles.socialButton)}>
      <div className={styles.icon}>
        {icon && <img className={styles.image} src={icon} alt="button-icon" />}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
      </div>
    </button>
  );
};
