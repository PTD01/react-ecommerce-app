import React, {useState} from 'react';
import '../Styles/App.css';

const Button = () => {

const [cart,setCart]= useState(0);
    return (
        <div className="button-container">
            <button className="button" >Add to cart</button>
        </div>

    );
}
export default Button;
