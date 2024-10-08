import React, {forwardRef, HTMLAttributes} from 'react';
import classNames from 'classnames';
import styles from './THead.module.scss';
import {BnBasicAttributes} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

// Extend HTML Thead element attributes
export interface THeadProps
  extends HTMLAttributes<HTMLTableSectionElement>,
    BnBasicAttributes {}

export const THead = forwardRef<HTMLTableSectionElement, THeadProps>(
  ({ bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <thead
        ref={ref}
        className={classNames(className ? className : styles.thead, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </thead>
    );
  },
);

THead.displayName = 'THead';

export const thead = THead;

export default THead;
