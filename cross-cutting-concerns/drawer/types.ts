import { Dispatch, SetStateAction } from 'react';

export type DrawerContextValue = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};