import React, { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Tr.module.scss';
import { BnBasicAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface TrProps
  extends HTMLAttributes<HTMLTableRowElement>,
    BnBasicAttributes {}

export const Tr = forwardRef<HTMLTableRowElement, TrProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={classNames(className ? className : styles.tr, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </tr>
    );
  },
);

Tr.displayName = 'Tr';

export const tr = Tr;

export default Tr;