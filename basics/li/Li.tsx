import React, { forwardRef, LiHTMLAttributes } from 'react';
import styles from './Li.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface LiProps
    extends LiHTMLAttributes<HTMLLIElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const Li = forwardRef<HTMLLIElement, LiProps>(
    ({ bnSize, bnVariant, bnIsLoading, className, children, ...props }, ref) => {
        return (
            <li
                ref={ref}
                className={classNames(className ? className : styles.li, {
                    [styles.bnVariant]: bnVariant,
                    [styles.bnSize]: bnSize,
                })}
                {...props}
            >
                {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
            </li>
        );
    },
);

Li.displayName = 'Li';

export const li = Li;

export default Li;
