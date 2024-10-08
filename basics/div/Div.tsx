import React, { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Div.module.scss';
import LoadingWrap from '../../common/LoadingWrap';
import {BnBasicAttributes} from "../../types";

// Extend HTML Div element attributes
export interface DivProps
  extends HTMLAttributes<HTMLDivElement>,
    BnBasicAttributes {}

const componentType = 'container';

export const Div = forwardRef<HTMLTableCellElement, DivProps>(
  ({ bnVariant, bnSize, bnIsLoading, bnIsDisable, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          styles[`${componentType}`],
          styles[`${componentType}-${bnSize}`],
          className,
          {
            [styles[`${componentType}-${bnVariant}`]]: !bnIsLoading,
            [styles[`${componentType}-disable`]]: bnIsLoading || bnIsDisable,
          },
        )}
        {...props}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </div>
    );
  },
);

Div.displayName = 'Div';

export const div = Div;

export default Div;
