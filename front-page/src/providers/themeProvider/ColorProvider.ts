import React, { createContext, useState } from 'react';
import { Theme, ThemeContextType } from "./theme";


export const ThemeCotext = createContext<ThemeContextType | null>(null)
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [themeMode, setThemeMode] = useState<Theme>('light');
    return (
      <ThemeCotext.Provider value={{theme: themeMode, changeTheme: setThemeMode}}>
        {children}
      </ThemeCotext.Provider>
    )
}

export  default ThemeProvider;

