import React, { useState, createContext } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

export const ThemeContext = createContext();

export default function Context(){

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prev => !prev);
    }

    return(
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FunctionContextComponent/>
            </ThemeContext.Provider>
        </>
    )
}