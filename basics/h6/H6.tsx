// shared/components/bunny-ui/basics/h6/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H6.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface H6Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const H6 = forwardRef<HTMLHeadingElement, H6Props>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <h6
                ref={ref}
                className={classNames(className ? className : styles.h6, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {children}
            </h6>
        );
    },
);

H6.displayName = 'H6'; // Set display name for better debugging

export const h6 = H6;

export default H6;
