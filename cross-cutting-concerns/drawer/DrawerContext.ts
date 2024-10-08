'use client';

import { createContext } from 'react';
import { DrawerContextValue } from './types';

export const DrawerContext = createContext<DrawerContextValue>({
  isOpen: true,
  setIsOpen: () => undefined,
});