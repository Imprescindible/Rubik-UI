import { FC, ReactNode } from 'react';

// styles
import styles from './IconButton.module.scss';

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const IconButton: FC<IconButtonProps> = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.wrapperIconButton}>
      <button>
        <div className={styles.IconButton}>{children}</div>
      </button>
    </div>
  );
};
