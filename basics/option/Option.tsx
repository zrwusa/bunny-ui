// shared/components/bunny-ui/basics/option/Option.tsx
import React, { forwardRef, OptionHTMLAttributes } from 'react';
import styles from './Option.module.scss';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';

export interface OptionProps
    extends OptionHTMLAttributes<HTMLOptionElement>,
        BnBasicAttributes,
        BnLeafAttributes {}

export const Option = forwardRef<HTMLOptionElement, OptionProps>(
    ({ bnSize, bnVariant, className, children, ...props }, ref) => {
        return (
            <option
                ref={ref}
                className={classNames(className ? className : styles.option, {
                    [styles.bnVariant]: bnVariant,
                    [styles.bnSize]: bnSize,
                })}
                {...props}
            >
                { children}
            </option>
        );
    },
);

Option.displayName = 'Option'; // Set display name for better debugging

export const option = Option;

export default Option;
