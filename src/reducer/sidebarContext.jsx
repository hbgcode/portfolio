// SidebarContext.js

import React, { createContext, useReducer } from 'react';
import themeReducer from './reducer';
import { useContext } from 'react';

const ThemeContext = createContext({ isDarkMode: false });

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { isDarkMode: false });

  const handleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const value = {
    state , dispatch , handleTheme
  }
  console.log("🚀 ~ file: sidebarContext.jsx:19 ~ ThemeProvider ~ value.state:", value.state)

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if(context === undefined){
    throw new Error("No theme is defined");
  }

  return context;
}

export default useThemeContext;
