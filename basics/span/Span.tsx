import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './Span.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface SpanProps
    extends HTMLAttributes<HTMLSpanElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const Span = forwardRef<HTMLSpanElement, SpanProps>(
    ({ bnSize, bnVariant, bnIsLoading, className, children, ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={classNames(className ? className : styles.span, {
                    [styles.bnVariant]: bnVariant,
                    [styles.bnSize]: bnSize,
                })}
                {...props}
            >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </span>
        );
    },
);

Span.displayName = 'Span'; // Set display name for better debugging

export const span = Span;

export default Span;
