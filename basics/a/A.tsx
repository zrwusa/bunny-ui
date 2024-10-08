import React, { forwardRef, AnchorHTMLAttributes } from 'react';
import styles from './A.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

export interface AProps
    extends AnchorHTMLAttributes<HTMLAnchorElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

const componentType = 'interactive-typography';

export const A = forwardRef<HTMLAnchorElement, AProps>(
    ({ bnVariant = 'primary', bnSize ='md', bnIsLoading, bnIsDisable, className, children, ...props }, ref) => {
        return (
            <a
                ref={ref}
                className={classNames(
                    styles[`${componentType}`],
                    styles[`${componentType}-${bnSize}`],
                    styles[`${componentType}-focus`],
                    className,
                    {
                        [styles[`${componentType}-${bnVariant}`]]: !(
                            bnIsDisable && bnIsLoading
                        ),
                        [styles[`${componentType}-disable`]]: bnIsDisable || bnIsLoading,
                    },
                )}
                {...props}
            >
                {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
            </a>
        );
    },
);

A.displayName = 'A';

export const a = A;

export default A;
