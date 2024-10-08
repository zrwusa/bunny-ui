// index.ts/shared/bunny-ui.ts
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type Variant = 'primary' | 'secondary' | 'accent' | 'error' | 'warning';

export interface BnBasicAttributes {
  bnVariant?: Variant;
  bnIsLoading?: boolean;
  bnIsDisable?: boolean;
  bnInnerLoadingIconClassName?: string;
  bnSize?: Size;
}

export interface BnLeafAttributes {
}
