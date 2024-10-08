import React, {forwardRef, TdHTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './Td.module.scss';
import {BnBasicAttributes} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

// Extend HTML Td element attributes
export interface TdProps
  extends TdHTMLAttributes<HTMLTableCellElement>,
    BnBasicAttributes {}

export const Td = forwardRef<HTMLTableCellElement, TdProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <td
        ref={ref}
        className={classNames(className ? className : styles.td, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </td>
    );
  },
);

Td.displayName = 'Td';

export const td = Td;

export default Td;
