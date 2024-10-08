import React, { forwardRef, SelectHTMLAttributes } from 'react';
import styles from './Select.module.scss';
import classNames from 'classnames';
import {
  BnBasicAttributes,
  BnLeafAttributes,
} from '../../types';

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    BnBasicAttributes,
    BnLeafAttributes {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ bnSize, bnVariant, bnIsLoading, className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={classNames(className ? className : styles.select, {
          [styles[bnVariant ?? '']]: bnVariant,
          [styles[bnSize ?? '']]: bnSize,
        })}
        disabled={bnIsLoading}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select'; // Set display name for better debugging

export const select = Select;

export default Select;
