// shared/components/bunny-ui/basics/button/Button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import {
  BnBasicAttributes,
  BnLeafAttributes,
} from '../../types';
import LoadingWrap from '../../common/LoadingWrap';
import styles from './Button.module.scss';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BnBasicAttributes,
    BnLeafAttributes {}

const componentType = 'interactive';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      bnVariant = 'primary',
      bnSize = 'md',
      bnIsLoading,
      bnIsDisable,
      bnInnerLoadingIconClassName,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles[`${componentType}`],
          styles[`${componentType}-${bnSize}`],
          styles[`${componentType}-focus`],
          className,
          {
            [styles[`${componentType}-${bnVariant}`]]: !(
              disabled &&
              bnIsDisable &&
              bnIsLoading
            ),
            [styles[`${componentType}-disable`]]:
              disabled || bnIsDisable || bnIsLoading,
          },
        )}
        disabled={disabled || bnIsDisable || bnIsLoading}
        {...props}
      >
        {bnIsLoading ? (
          <LoadingWrap className={bnInnerLoadingIconClassName}>
            {children}
          </LoadingWrap>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export const button = Button;

export default Button;
