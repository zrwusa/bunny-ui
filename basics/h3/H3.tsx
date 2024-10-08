// shared/components/bunny-ui/basics/h3/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H3.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface H3Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <h3
                ref={ref}
                className={classNames(className ? className : styles.h3, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {children}
            </h3>
        );
    },
);

H3.displayName = 'H3'; // Set display name for better debugging

export const h3 = H3;

export default H3;
