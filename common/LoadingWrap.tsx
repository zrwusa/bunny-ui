'use client';

import React, {forwardRef, HTMLAttributes, useEffect, useRef} from 'react';
import classNames from 'classnames';
import styles from './LoadingWrap.module.scss';
import {IconTreeDotsLoading} from './icons/IconTreeDotsLoading';

// Extend HTML LoadingWrap element attributes
export interface LoadingWrapProps extends HTMLAttributes<HTMLDivElement> {
  bnInnerLoadingIconClassName?: string;
}

export const LoadingWrap = forwardRef<HTMLDivElement, LoadingWrapProps>(
  ({ className, bnInnerLoadingIconClassName, children, ...props }, ref) => {
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (wrapRef.current && wrapRef.current.parentElement) {
        const parentStyles = getComputedStyle(wrapRef.current.parentElement);
        const inherits = [
          'display',
          'flex',
          'flex-grow',
          'flex-direction',
          'justify-content',
          'align-items',
          'grid-template-columns',
          'grid-template-rows',
          'column-count',
          'column-width',
          'clip',
          'overflow',
          'overflow-x',
          'overflow-y',
          'float',
        ];
        for (let i = 0; i < inherits.length; i++) {
          const key = inherits[i];
          wrapRef.current.style.setProperty(
            key,
            parentStyles.getPropertyValue(key),
          );
        }
        wrapRef.current.style.setProperty('padding', '0px');
        wrapRef.current.style.setProperty('margin', '0px');
        wrapRef.current.style.setProperty('border-width', '0px');
        wrapRef.current.style.setProperty('outline', 'none');
      }
    }, []);

    return (
      <span
        ref={wrapRef}
        className={classNames(className ? className : styles.loadingWrap, {})}
        {...props}
      >
        <IconTreeDotsLoading
          className={bnInnerLoadingIconClassName || styles.loadingIcon}
        />
        {children}
      </span>
    );
  },
);

LoadingWrap.displayName = 'LoadingWrap';

export default LoadingWrap;
