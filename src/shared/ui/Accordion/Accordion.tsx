// react
import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

// TODO rework accordion

export const Accordion: FC<AccordionProps> = ({ title, children }) => {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li>
          <Link to="/">Women's Fashion</Link>
          <ul className={styles.dropdownContent}>
            <li>Dropdown Content 1</li>
            <li>Another Item 1</li>
            <li>Yet Another Item 1</li>
          </ul>
        </li>
        <li>
          <Link to="/">Men's Fashion</Link>
          <ul className={styles.dropdownContent}>
            <li>Dropdown Content 2</li>
            <li>Another Item 2</li>
            <li>Yet Another Item 2</li>
          </ul>
        </li>
        <li>
          <Link to="/">Electronics</Link>
        </li>
        <li>
          <Link to="/">Home & Lifestyle</Link>
        </li>
        <li>
          <Link to="/">Medicine</Link>
        </li>
        <li>
          <Link to="/">Sports & Outdoor</Link>
        </li>
        <li>
          <Link to="/">Baby’s & Toys</Link>
        </li>
        <li>
          <Link to="/">Groceries & Pets</Link>
        </li>
        <li>
          <Link to="/">Health & Beauty</Link>
        </li>
      </ul>
    </div>
  );
};
