// shared/components/bunny-ui/basics/switch/Switch.tsx
import React, { InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';
import { BnBasicAttributes, BnLeafAttributes } from '../../types';
import styles from './Switch.module.scss';
import LoadingWrap from "../../common/LoadingWrap";

export interface SwitchProps
    extends InputHTMLAttributes<HTMLInputElement>,
        BnBasicAttributes,
        BnLeafAttributes {
    bnInnerSlideClassName?: string;
}

const componentType = 'interactive-switch';

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    (
        {
            bnVariant = 'primary',
            bnSize = 'md',
            bnIsLoading,
            bnIsDisable,
            className,
            disabled,
            bnInnerSlideClassName,
            bnInnerLoadingIconClassName,
            ...props
        },
        ref,
    ) => {
        const inner = <><input
            type="checkbox"
            ref={ref}
            className={styles[`master`]}
            disabled={disabled || bnIsDisable || bnIsLoading}
            {...props}
        />
        <span className={classNames(styles[`slider`], bnInnerSlideClassName)}></span>
            </>;
        return (
            <label className={classNames(
                styles[`${componentType}`],
                styles[`${componentType}-${bnSize}`],
                styles[`${componentType}-focus`],
                className,
                {
                    [styles[`${componentType}-${bnVariant}`]]: !(disabled && bnIsDisable && bnIsLoading),
                    [styles[`${componentType}-disable`]]: disabled || bnIsDisable || bnIsLoading,
                })}>

                {bnIsLoading ? <LoadingWrap className={bnInnerLoadingIconClassName}>{inner}</LoadingWrap> : inner}
            </label>
        );
    }
);

Switch.displayName = 'Switch';

export default Switch;
