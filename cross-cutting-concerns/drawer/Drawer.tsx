import { HTMLProps, ReactNode } from 'react';
import styles from './Drawer.module.css';

export interface DrawerProps extends HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  isOpen: boolean;
  direction?: 'left' | 'right';
}

export const Drawer = ({
  children,
  isOpen = false,
  direction = 'left',
  ...rest
}: DrawerProps) => {
  return (
    <div className={styles.drawerContainer} {...rest}>
      <div
        className={
          direction === 'left' ? styles.drawerOpenLeft : styles.drawerOpenRight
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;