import React, {ButtonHTMLAttributes, forwardRef} from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

// Extend HTML Radio element attributes
export interface ExampleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bnVariant?: 'primary' | 'secondary' | 'accent';
  bnSize?: 'small' | 'medium' | 'large';
  bnIsLoading?: boolean;
}

export const Example = forwardRef<HTMLButtonElement, ExampleProps>(
  (
    {
      bnVariant = 'primary',
      bnSize = 'medium',
      bnIsLoading,
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
          styles.button,
          styles[bnVariant],
          styles[bnSize],
          {
            [styles.loading]: bnIsLoading,
            [styles.disabled]: disabled || bnIsLoading,
          },
          className,
        )}
        disabled={disabled || bnIsLoading}
        {...props}
      >
        {bnIsLoading ? 'Loading...' : children}
      </button>
    );
  },
);

Example.displayName = 'Example';

export default Example;
