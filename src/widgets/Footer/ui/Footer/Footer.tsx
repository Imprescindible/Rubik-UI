// react
import { FC } from 'react';
// ui
import { FooterSocial } from '../FooterSocial/FooterSocial';
import { Link } from '@/shared/ui/Link';
import { Input } from '@/shared/ui/Input/Input';
import icon from '@/shared/assets/svg/iconSend.svg';
// styles
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.column}>
        <h2>Exclusive</h2>
        <ul>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>
            <Input
              border="fullWhite"
              placeholder="Enter your Email"
              icon={icon}
              type="email"
              label="Enter your Email"
            />
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Support</h2>
        <ul>
          <li>
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Account</h2>
        <ul>
          <li>
            <Link to="" textColor="black" underline={true}>
              My Account
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Login / Register
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Shop
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Quick Link</h2>
        <ul>
          <li>
            <Link to="" textColor="black" underline={true}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Terms Of Use
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="" textColor="black" underline={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h2>Download App</h2>
        <FooterSocial />
      </div>
    </div>
  );
};
