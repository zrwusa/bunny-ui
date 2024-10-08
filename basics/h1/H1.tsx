// shared/components/bunny-ui/basics/h3/H1.tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './H1.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import LoadingWrap from "../../common/LoadingWrap";

export interface H1Props
    extends HTMLAttributes<HTMLHeadingElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

const componentType = 'typography';

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
    ({ bnSize = 'md', bnVariant, bnIsLoading, bnIsDisable, className, children, ...props }, ref) => {
        return (
            <h1
                ref={ref}
                className={classNames(
                    styles[`${componentType}`],
                    styles[`${componentType}-${bnSize}`],
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
            </h1>
        );
    },
);

H1.displayName = 'H1'; // Set display name for better debugging

export const h1 = H1;

export default H1;
