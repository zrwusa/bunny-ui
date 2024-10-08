import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import {
  BnBasicAttributes,
  BnLeafAttributes,
} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';
import styles from './Radio.module.scss';

export interface RadioProps
  extends InputHTMLAttributes<HTMLInputElement>,
    BnBasicAttributes,
    BnLeafAttributes {}

const componentType = 'interactive';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      bnVariant = 'primary',
      bnSize = 'md',
      bnIsLoading,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type="radio"
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

Radio.displayName = 'Radio';

export default Radio;
