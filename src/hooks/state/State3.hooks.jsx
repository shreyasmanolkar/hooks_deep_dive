import React, { useState } from "react";

function State3(){

    const [user, setUser] = useState({
        name:"",
        surname:"",
        username:"",
        email:"",
        password:"",
        country:"",
        city:"",
        address:""
    })

    const handleChange = (e) => {
        setUser(prev => ({...prev, [e.target.name]: e.target.value}))
    };

    console.log(user);

    return(
        <>
            <form>
                <input type="text" name="name" onChange={handleChange} placeholder="name" /><br /><br />
                <input type="text" name="surname" onChange={handleChange} placeholder="surname" /><br /><br />
                <input type="text" name="username" onChange={handleChange} placeholder="username" /><br /><br />
                <input type="text" name="email" onChange={handleChange} placeholder="email" /><br /><br />
                <input type="password" name="password" onChange={handleChange} placeholder="password" /><br /><br />
                <input type="text" name="country" onChange={handleChange} placeholder="country" /><br /><br />
                <input type="text" name="city" onChange={handleChange} placeholder="city" /><br /><br />
                <input type="text" name="address" onChange={handleChange} placeholder="address" /><br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default State3;