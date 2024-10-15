// react
import { useState, FC } from 'react';
// ui
import Icon from '@/shared/assets/svg/heartSmall.svg?react';
import { Button } from '@/shared/ui/Button/Button';
// assets
import Basket from '@/shared/assets/svg/basket.svg?react';
// styles
import styles from './ProductCard.module.scss';
import classNames from 'classnames';

interface ProductCardProps {
  icon: string;
  name: string;
  price: string;
  discount?: string;
  isNewProduct?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  icon,
  name,
  price,
  discount,
  isNewProduct,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  const onHeartClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div
      className={styles.item}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <div
        onClick={onHeartClick}
        className={classNames({
          [styles.active]: isClicked,
          [styles.heart]: true,
        })}>
        {<Icon className={styles.Icon} />}
      </div>
      <div className={styles.newProduct}>
        {isNewProduct && <span className={styles.new}>NEW</span>}
      </div>
      <div className={styles.wrapperCoat}>
        <img src={icon} />
        {isHovered && (
          <div className={styles.btn}>
            <Button
              onClick={() => {}}
              colorVariant="black"
              size="sizeS"
              textColor="white"
              icon={<Basket />}>
              Add to Cart
            </Button>
          </div>
        )}
      </div>
      <div className={styles.description}>
        <p className={styles.itemName}>{name}</p>
        <p className={styles.price}>
          {price}
          {discount && <span className={styles.discount}>{discount}</span>}
        </p>
        <p>stars</p>
      </div>
    </div>
  );
};
