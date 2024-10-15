// ui
import { ProductCard } from '@/enteties/Product';
//img
import dogFood from '@/shared/assets/png/dogFood.png';
import camera from '@/shared/assets/png/camera.png';
import laptop from '@/shared/assets/png/laptop.png';
import curology from '@/shared/assets/png/curology.png';
import jacket from '@/shared/assets/png/jacket.png';
import copa from '@/shared/assets/png/copa.png';
import GP from '@/shared/assets/png/GP.png';
import car from '@/shared/assets/png/car.png';

// styles
import styles from './OurProducts.module.scss';

export const OurProducts = ({}) => {
  return (
    <div className={styles.SellingProducts}>
      <div className={styles.header}>
        <div className={styles.square}></div>
        <div className={styles.headerName}>Our Products</div>
      </div>
      <div className={styles.wrapperBtn}>
        <div className={styles.headerProducts}>Explore Our Products</div>
      </div>
      <div className={styles.container}>
        <ProductCard
          icon={dogFood}
          name={'Breed Dry Dog Food'}
          price={'$100'}
          isNewProduct={true}
        />
        <ProductCard
          icon={camera}
          name={'CANON EOS DSLR Camera'}
          price={'$360'}
        />
        <ProductCard
          icon={laptop}
          name={'ASUS FHD Gaming Laptop'}
          price={'$700'}
        />
        <ProductCard
          icon={curology}
          name={'Curology Product Set'}
          price={'$500'}
        />
        <ProductCard icon={car} name={'Kids Electric Car'} price={'$960'} />
        <ProductCard
          icon={copa}
          name={'Jr. Zoom Soccer Cleats'}
          price={'$1160'}
        />
        <ProductCard
          icon={GP}
          name={'GP11 Shooter USB Gamepad'}
          isNewProduct
          price={'$660'}
        />
        <ProductCard
          icon={jacket}
          name={'Quilted Satin Jacket'}
          price={'$660'}
        />
      </div>
    </div>
  );
};
