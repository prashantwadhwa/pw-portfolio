// ThemeContext.js
import React, { useState, useContext, createContext } from "react";
import { darkTheme, lightTheme } from "../Utiles/Theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    console.log("Toggling theme...");
    setTheme(theme === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
