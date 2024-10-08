import React, {forwardRef, ThHTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './Th.module.scss';
import {BnBasicAttributes} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

// Extend HTML Th element attributes
export interface ThProps
  extends ThHTMLAttributes<HTMLTableCellElement>,
    BnBasicAttributes {}

export const Th = forwardRef<HTMLTableCellElement, ThProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <th
        ref={ref}
        className={classNames(className ? className : styles.th, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </th>
    );
  },
);

Th.displayName = 'Th';

export const th = Th;

export default Th;
