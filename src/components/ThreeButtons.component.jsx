import React, { useState } from "react";

function ThreeButton(){

    const [status, setStatus] = useState({
        btnA: true,
        btnB: true,
        btnC: true
    });

    const handleClick = (e) => {
        setStatus(prev => ({...prev, [e.target.name]: !status[e.target.name]}));
    }

    return(
        <>
            <input type="button" value={status.btnA ? "uploadA" : "deleteA"} name="btnA" onClick={handleClick}/> <br /><br />
            <input type="button" value={status.btnB ? "uploadB" : "deleteB"} name="btnB" onClick={handleClick}/> <br /><br />
            <input type="button" value={status.btnC ? "uploadC" : "deleteC"} name="btnC" onClick={handleClick}/>
        </>
    )
}

export default ThreeButton;