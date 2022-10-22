import React, { useEffect, useState } from "react";

function Effect2(){

    const [name, setName] = useState("");
    const [state, setState] = useState({
        name: "",
        selected: false
    });

    useEffect(()=>{
        console.log("the state has changed, useEffect runs!");
    // }, [state.name, state.selected]);
    }, [state]);

    const handleAdd = () => {
        setState(prev => ({...prev, name}))
    }

    const handleSelect = () => {
        setState(prev => ({...prev, selected: !state.selected}));
    }

    return(
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} /> <br /><br />
            <button onClick={handleAdd}>Add Name</button><br /><br />
            <button onClick={handleSelect}>Select</button><br /><br />
            {`{name:${state.name},\n selected:${state.selected.toString()}}`}
        </>
    )
}

export default Effect2;