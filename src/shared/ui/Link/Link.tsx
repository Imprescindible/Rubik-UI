// react
import { FC, ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
// libs
import classNames from 'classnames';
// styles
import styles from './Link.module.scss';

interface LinkProps {
  children: ReactNode;
  textColor: 'white' | 'black';
  underline?: boolean;
  to: string;
}

export const Link: FC<LinkProps> = ({ children, to, textColor, underline }) => {
  return (
    <ReactRouterLink
      className={classNames(styles.Link, {
        [styles.white]: textColor === 'white',
        [styles.black]: textColor === 'black',
        [styles.underline]: underline === true,
      })}
      to={to}>
      {children}
    </ReactRouterLink>
  );
};
