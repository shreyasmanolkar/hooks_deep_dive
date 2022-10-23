import React, { useReducer } from "react";
import { INITIAL_STATE, threeButtonsReducer } from "./threeButtonsReducer";

function ReducerThreeButton(){

    const [status, dispatch] = useReducer(threeButtonsReducer, INITIAL_STATE);

    const handleClick = (e) => {
        dispatch({type: e.target.name} ) 
    } 

    return(
        <>
            <input type="button" value={ status.btnA ? "uploadA" : "deleteA" } name="btnA" onClick={handleClick} /> <br /><br />
            <input type="button" value={ status.btnB ? "uploadB" : "deleteB" } name="btnB" onClick={handleClick} /> <br /><br />
            <input type="button" value={ status.btnC ? "uploadC" : "deleteC" } name="btnC" onClick={handleClick} /> <br /><br />
        </>
    )
}

export default ReducerThreeButton;