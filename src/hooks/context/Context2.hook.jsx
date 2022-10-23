import React, { useState, createContext } from "react";
import Child from "./Child.component";

export const UserContext = createContext(); 
export const SetUserContext = createContext();

function Context2(){

    const [user, setUser] = useState({
        firstName: "shreyas",
        lastName: "manolkar",
        age: 22,
        subscribed: false
    });

    const handleClick = () => {
        setUser(prev => ({...prev, subscribed: !user.subscribed}))
    };

    return(
        <>
            <UserContext.Provider value={user}>
                <SetUserContext.Provider value={setUser}>
                    <h1>This is Parent Component</h1>
                    <button onClick={handleClick} >Subscribe</button>
                    <p>This is the proof: <br /> {user.firstName} <br /> {user.lastName} <br /> {user.age} <br /> {user.subscribed.toString()} </p>
                    <Child/>
                </SetUserContext.Provider>
            </UserContext.Provider>
        </>
    )
}

export default Context2;