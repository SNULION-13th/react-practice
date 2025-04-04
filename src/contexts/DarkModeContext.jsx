import { createContext, useState, useContext } from "react";

const DEFAULT_CONTEXT_VALUE = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

const DarkModeContext = createContext(DEFAULT_CONTEXT_VALUE);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  if (!toggleDarkMode) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return { isDarkMode, toggleDarkMode };
};
