// shared/components/bunny-ui/basics/ul/Ul.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './Ul.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface UlProps
    extends HTMLAttributes<HTMLUListElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const Ul = forwardRef<HTMLUListElement, UlProps>(
    ({ bnSize, bnVariant, bnIsLoading, className, children, ...props }, ref) => {
        return (
            <ul
                ref={ref}
                className={classNames(className ? className : styles.ul, {
                    [`${styles.bnVariant}Backdrop`]: bnVariant,
                    [styles.bnSize]: bnSize,
                })}
                {...props}
            >
                {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
            </ul>
        );
    },
);

Ul.displayName = 'Ul'; // Set display name for better debugging

export const ul = Ul;

export default Ul;
