import React, { useRef, useState } from "react";

function Reducer2(){

    const [product, setProduct] = useState({
        title: "",
        desc: "",
        price: 0,
        category: "",
        tags: [],
        images: {
            sm: "",
            md: "",
            lg: ""
        },
        quantity: 0
    });

    const handleChange = (e) => {
        setProduct((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    };
    
    const tagRef = useRef();

    const handleTags = () => {
        const tags = tagRef.current.value.split(",");
        tags.forEach((tag)=>{
            setProduct((prev) => ({...prev, tags: [...prev.tags, tag]}));
        });
    };

    const handleRemoveTag = (tag) => {
        setProduct((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tag)
        }));
    };

    const handleIncrease = () => {
        setProduct((prev) => ({...prev, quantity: prev.quantity + 1}));
    };

    const handleDecrease = () => {
        setProduct((prev) => ({
            ...prev,
            quantity: prev.quantity - 1
        }));
    };

    return(
        <div>
            <form>
                <input type="text" name="title" onChange={handleChange} placeholder="Title" /><br /><br />

                <input type="text" name="desc" onChange={handleChange} placeholder="Desc" /><br /><br />
                
                <input type="number" name="price" onChange={handleChange} placeholder="price"/><br /><br />
                
                <p>Category:</p>
                <select name="category" id="category" onChange={(handleChange)}>
                    <option value="sneakers">Sneakers</option>
                    <option value="tshirt">T-shirts</option>
                    <option value="jeans">Jeans</option>
                </select>
                
                <p>Tages:</p>
                
                <textarea ref={tagRef} placeholder="Seperate tags with commas..."></textarea><br /> 
                
                <button type="button" onClick={handleTags}>Add Tags</button>
                
                <div className="tags">
                    {
                        product.tags.map((tag) => (
                            <small key={tag} onClick={()=> handleRemoveTag(tag)}>
                                {tag}
                            </small>
                        ))
                    }
                </div><br /><br />
                
                <div className="quantity">
                    <button type="button" onClick={handleDecrease}>-</button>
                    <span>Quantity({product.quantity})</span>
                    <button type="button" onClick={handleIncrease}>+</button>
                </div>
                
            </form>
        </div>
    )
}

export default Reducer2;