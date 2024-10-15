// react
import { FC } from 'react';
// ui
import { LaptopAccordion } from '../LaptopAccordion/LaptopAccordion';
// styles
import styles from './Categories.module.scss';

interface CategoriesProps {
  className: string;
}

export const Categories: FC<CategoriesProps> = ({ className }) => {
  return (
    <div className={className}>
      <LaptopAccordion />
    </div>
  );
};
