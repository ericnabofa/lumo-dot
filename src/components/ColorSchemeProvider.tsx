'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

const ColorSchemeContext = createContext<string>('#43C8FF');

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const backgroundColor = useColorScheme();

  // Update CSS variable
  React.useEffect(() => {
    document.documentElement.style.setProperty('--lumo-primary', backgroundColor);
  }, [backgroundColor]);

  return (
    <ColorSchemeContext.Provider value={backgroundColor}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useCurrentColor = () => useContext(ColorSchemeContext);
