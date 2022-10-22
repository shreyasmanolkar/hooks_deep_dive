import React, { useEffect, useState } from "react";

function Effect(){

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.count("useEffect runs!")
        document.title = `you Clicked ${number} times` 
    }, []);             // run only once it is mounted
    // }, [number]);    // runs on mounted as well as when the number changes

    console.count("componenet renderd!");

    return(
        <>
            <span>You Clicked { number } times</span><br />
            <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button> 
        </>
    )
}

export default Effect;