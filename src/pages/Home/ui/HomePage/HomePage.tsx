// widgets
import { ServicesBlock } from '@/widgets/ServicesBlock/ui/ServicesBlock';
import { Slider } from '@/widgets/Slider';
// ui
import { CategoriesList } from '../CategoriesList/CategoriesList';
import { Categories } from '../Categories/Categories';
import { SellingProducts } from '../SellingProducts/SellingProducts';
import { OurProducts } from '../OurProducts/OurProducts';
// styles
import styles from './HomePage.module.scss';
export const HomePage = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.HomePageWrapper}>
        <div className={styles.HomePage}>
          <Categories className={styles.Categories} />
          <Slider className={styles.Slider} />
        </div>
      </div>
      <div className={styles.CategoriesList}>
        <CategoriesList />
      </div>
      <div className={styles.SellingProducts}>
        <SellingProducts />
        <OurProducts />
      </div>
      <ServicesBlock />
    </div>
  );
};
