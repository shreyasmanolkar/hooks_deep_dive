import React, { useState } from "react";

function State2(){

    const [input, setInput] = useState("");

    const [user, setUser] = useState({
        userName: "shreyas",
        email: "shreyasmanolkar@gmail.com",
        images: ['image1.png', 'image2.jpg']
    });

    const changeUser = () => {
        setUser(prev => ({...prev, userName: input}))
    }

    console.log(user);

    return(
        <>
            <input type="text" placeholder="enter a new name..." value={input}  onChange={e=>setInput(e.target.value)} /><br />
            <button onClick={changeUser}>Change userName</button><br /><br />
            <span>UserName is: { user?.userName }</span><br />  {/* user? checks if user has any value  */}
        </>
    )
}

export default State2;