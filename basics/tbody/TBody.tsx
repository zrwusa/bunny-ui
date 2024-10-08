import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './TBody.module.scss';
import {BnBasicAttributes} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

// Extend HTML TBody element attributes
export interface TBodyProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BnBasicAttributes {}

export const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <tbody
        ref={ref}
        className={classNames(className ? className : styles.tbody, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </tbody>
    );
  },
);

TBody.displayName = 'TBody';

export const tbody = TBody;

export default TBody;
