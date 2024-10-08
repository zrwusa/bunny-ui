// shared/components/bunny-ui/basics/label/Label.tsx
import React, { forwardRef, LabelHTMLAttributes } from 'react';
import styles from './Label.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface LabelProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={classNames(className ? className : styles.label, {
                    [styles.bnVariant]: bnVariant,
                    [styles.bnSize]: bnSize,
                })}
                {...props}
            >
                {children}
            </label>
        );
    },
);

Label.displayName = 'Label';

export default Label;
