import React, {forwardRef, TableHTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './Table.module.scss';
import {BnBasicAttributes} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

// Extend HTML Table element attributes
export interface TableProps
  extends TableHTMLAttributes<HTMLTableElement>,
    BnBasicAttributes {}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <table
        ref={ref}
        className={classNames(className ? className : styles.table, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </table>
    );
  },
);

Table.displayName = 'Table';

export const table = Table;

export default Table;
