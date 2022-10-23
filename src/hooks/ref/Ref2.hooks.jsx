import React, { useEffect, useRef, useState } from "react";

function Ref2(){

    const [name, setName] = useState("");
    const renderCount = useRef(0);
    
    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
    });

    return(
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>My name is: {name} </h1>
            <div>Rendered {renderCount.current} times</div>
        </>
    )
}

export default Ref2;