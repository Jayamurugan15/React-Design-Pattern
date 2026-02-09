import React, { Children, useState } from 'react';
import {ThemeContext} from "../context/index"

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme(prev => !prev);
        document.body.classList.toggle("dark");
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider