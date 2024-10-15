// react
import { FC, ReactNode, useState } from 'react';
// libs
import classNames from 'classnames';
// styles
import styles from './CategoryItem.module.scss';

interface CategoryItemProps {
  icon: ReactNode;
  name: string;
}

export const CategoryItem: FC<CategoryItemProps> = ({ icon, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={styles.CategoryItem}>
      <div
        className={classNames(styles.image, {
          [styles.active]: isHovered,
          //   [styles.active]: true,
        })}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div className={styles.test}>
          <div>{icon}</div>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
