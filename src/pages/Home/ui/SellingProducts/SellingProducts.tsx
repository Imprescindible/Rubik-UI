// ui
import { ProductCard } from '@/enteties/Product';
import { Button } from '@/shared/ui/Button/Button';
//img
import coat from '@/shared/assets/png/coat.png';
import bag from '@/shared/assets/png/gucci.png';
import fan from '@/shared/assets/png/fan.png';
import bookSelf from '@/shared/assets/png/bookSelf.png';
// styles
import styles from './SellingProducts.module.scss';

export const SellingProducts = ({}) => {
  return (
    <div className={styles.SellingProducts}>
      <div className={styles.header}>
        <div className={styles.square}></div>
        <div className={styles.headerName}>this month</div>
      </div>
      <div className={styles.wrapperBtn}>
        <div className={styles.headerProducts}>Best Selling Products</div>
        <div className={styles.btn}>
          <Button
            colorVariant="red"
            textColor="white"
            size="sizeS"
            onClick={() => {}}>
            View All
          </Button>
        </div>
      </div>
      <div className={styles.container}>
        <ProductCard
          name={'The North Coat'}
          icon={coat}
          price={'$260'}
          discount={'$360'}
        />

        <ProductCard
          name={'Gucci duffle bag'}
          icon={bag}
          price={'$960'}
          discount={'$1160'}
        />

        <ProductCard
          name={'RGB liquid CPU Cooler'}
          icon={fan}
          price={'$160'}
          discount={'$170'}
        />

        <ProductCard name={'Small BookSelf'} icon={bookSelf} price={'$360'} />
      </div>
    </div>
  );
};
