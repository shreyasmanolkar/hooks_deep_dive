import React, { useContext } from "react";
import { SetUserContext, UserContext } from "./Context2.hook";

function GrandChild(){

    const user = useContext(UserContext);
    const setUser = useContext(SetUserContext);

    const handleClick = () => {
        setUser(prev => ({...prev, subscribed: !user.subscribed}))
    }
    
    return(
        <>
            <h1>This is Grand-Child Component</h1>
            <button onClick={handleClick}>Subscribe</button>
            <p>This is the proof: <br /> {user.firstName} <br /> {user.lastName} <br /> {user.age} <br /> {user.subscribed.toString()} </p>
        </>
    )
}

export default GrandChild;