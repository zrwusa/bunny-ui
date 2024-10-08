import { ComponentPropsWithoutRef, ElementType } from 'react';

type MonomorphicComponentProps<C extends ElementType> = {
  as?: C;
  children?: React.ReactNode;
};

export type PolymorphicComponentProps<C extends ElementType> =
  MonomorphicComponentProps<C> & ComponentPropsWithoutRef<C>;

export const PolymorphicComponent = <C extends ElementType = 'div'>({
  as,
  children,
  ...rest
}: PolymorphicComponentProps<C>) => {
  const Component = as || 'div';
  return <Component {...rest}>{children}</Component>;
};

export default PolymorphicComponent;