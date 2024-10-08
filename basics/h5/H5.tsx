// shared/components/bunny-ui/basics/h5/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H5.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface H5Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const H5 = forwardRef<HTMLHeadingElement, H5Props>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <h5
                ref={ref}
                className={classNames(className ? className : styles.h5, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {children}
            </h5>
        );
    },
);

H5.displayName = 'H5'; // Set display name for better debugging

export const h5 = H5;

export default H5;
