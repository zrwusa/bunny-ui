import React, { forwardRef, FormHTMLAttributes } from 'react';
import styles from './Form.module.scss';
import classNames from 'classnames';
import {BnBasicAttributes} from "../../../../types/shared";
import LoadingWrap from "../../common/LoadingWrap";

export interface FormProps
    extends FormHTMLAttributes<HTMLFormElement>,
        BnBasicAttributes {

}

const componentType = 'container';
export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({ bnVariant = 'primary', bnSize = 'md', bnIsDisable, bnIsLoading, className, children, ...props }, ref) => {
        return (
            <form
                ref={ref} className={classNames(
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
                {bnIsLoading ? (
                    <LoadingWrap>{children}</LoadingWrap>
                ) : (
                    children
                )}
            </form>
        );
    }
);

Form.displayName = 'Form'; // Set display name for better debugging

export const form = Form;

export default Form;
