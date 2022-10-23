import React, {useContext} from "react";
import { ThemeContext } from "./Context.hooks";

function FunctionContextComponent(){

    const darkTheme = useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return(
        <>
            <h3 style={themeStyles}>Function Theme</h3>
        </>
    )
}

export default FunctionContextComponent;