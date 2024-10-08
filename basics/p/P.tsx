// shared/components/bunny-ui/basics/p/P.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './P.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface PProps
    extends HTMLAttributes<HTMLParagraphElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const P = forwardRef<HTMLParagraphElement, PProps>(
    ({ bnSize, bnVariant, bnIsLoading, className, children, ...props }, ref) => {
        return (
            <p
                ref={ref}
                className={classNames(className ? className : styles.p, {
                    [styles[bnVariant ?? '']]: bnVariant,
                    [styles[bnSize ?? '']]: bnSize,
                })}
                {...props}
            >
                {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
            </p>
        );
    },
);

P.displayName = 'P'; // Set display name for better debugging

export const p = P;

export default P;
