// shared/components/bunny-ui/basics/h4/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H4.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface H4Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const H4 = forwardRef<HTMLHeadingElement, H4Props>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <h4
                ref={ref}
                className={classNames(className ? className : styles.h4, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {children}
            </h4>
        );
    },
);

H4.displayName = 'H4'; // Set display name for better debugging

export const h4 = H4;

export default H4;
