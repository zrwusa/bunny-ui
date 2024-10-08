// shared/components/bunny-ui/basics/h2/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H2.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface H2Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <h2
                ref={ref}
                className={classNames(className ? className : styles.h2, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {children}
            </h2>
        );
    },
);

H2.displayName = 'H2'; // Set display name for better debugging

export const h2 = H2;

export default H2;
