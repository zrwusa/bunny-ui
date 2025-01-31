// import React from 'react';
//
// type PropsOf<
//     E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
// > = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>;
//
// export interface BoxOwnProps<E extends React.ElementType = React.ElementType> {
//     as?: E;
// }
//
// export type BoxProps<E extends React.ElementType> = BoxOwnProps<E> &
//     Omit<PropsOf<E>, keyof BoxOwnProps>;
//
// export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
//     BoxProps<E>;
//
// const defaultElement = 'div';
//
// const Box = React.forwardRef(
//     ({ as, ...restProps }: BoxOwnProps, ref: React.Ref<Element>) => {
//         const Element = as || defaultElement;
//         return <Element ref={ref} {...restProps} />;
//     },
// ) as <E extends React.ElementType = typeof defaultElement>(
//     props: BoxProps<E>,
// ) => JSX.Element;

// /* Usage example: */
//
// interface CustomComponentOwnProps {
//     customProp?: number;
//     onClick: boolean;
// }
//
// type CustomComponentProps<
//     E extends React.ElementType
// > = PolymorphicComponentProps<E, CustomComponentOwnProps>;
//
// function CustomComponent<E extends React.ElementType>(
//     props: CustomComponentProps<E>,
// ): JSX.Element {
//     return <Box {...props} />;
// }
