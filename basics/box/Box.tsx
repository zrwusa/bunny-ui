import React, {
  ElementType,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from 'react';
import classNames from 'classnames';
import styles from './Box.module.scss';
import { BnBasicAttributes } from '../../types';
import LoadingWrap from '../../common/LoadingWrap';

type Tags = keyof HTMLElementTagNameMap;

// type Tags = keyof IntrinsicElements;

export interface BoxProps<T extends Tags = 'div'>
  extends HTMLAttributes<HTMLElementTagNameMap[T]>,
    BnBasicAttributes {
  bnTag?: T;
}

export const Box = forwardRef(
  <T extends Tags = 'div'>(
    {
      bnTag,
      bnVariant,
      bnIsLoading,
      children,
      className,
      ...rest
    }: BoxProps<T>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    // TODO The type safety of ref is questionable

    const Tag = (bnTag || 'div') as ElementType;

    return (
      <Tag
        ref={ref}
        className={classNames(className ? className : styles.box, {
          [styles[`${bnVariant}Backdrop`]]: bnVariant,
        })}
        {...rest}
      >
        {bnIsLoading ? <LoadingWrap>{children}</LoadingWrap> : children}
      </Tag>
    );
  },
);

Box.displayName = 'Box';

export default Box;