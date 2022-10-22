import React, { useEffect, useState } from "react";

function Effect4(){

    const [toggle, setToggle] = useState(false)

    useEffect(()=>{
        console.log("effect runs!");
        // toggle

        // return a clean up function
        return () => {
            console.log('wait! before running the effect, i should clean here!');

            // clear something from the previous effect
            console.log('okay done! you can run!');
        }

    }, [toggle]);

    return(
        <>
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        </>
    )
}

export default Effect4;