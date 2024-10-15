// shared
import { Accordion } from '@/shared/ui/Accordion';
// ui
import styles from './LaptopAccordion.module.scss';

export const LaptopAccordion = ({}) => {
  return (
    <div className={styles.accordion}>
      {/* TODO change children */}
      <Accordion title="Laptops">fa</Accordion>
    </div>
  );
};
