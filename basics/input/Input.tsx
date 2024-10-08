// shared/components/bunny-ui/basics/input/Input.tsx
import React, {forwardRef, InputHTMLAttributes} from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import {BnBasicAttributes, BnLeafAttributes,} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    BnBasicAttributes,
    BnLeafAttributes {}

const componentType = 'form';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ bnSize, bnVariant, bnIsLoading, bnIsDisable, disabled, className, children, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
            styles[`${componentType}`],
            styles[`${componentType}-${bnSize}`],
            styles[`${componentType}-focus`],
            className,
            {
                [styles[`${componentType}-${bnVariant}`]]: !(
                    disabled && bnIsLoading
                ),
                [styles[`${componentType}-disable`]]: disabled || bnIsLoading,
            },
        )}
        disabled={disabled || bnIsLoading}
        {...props}
      >
          {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </input>
    );
  },
);

Input.displayName = 'Input'; // Set display name for better debugging

export const input = Input;

export default Input;
