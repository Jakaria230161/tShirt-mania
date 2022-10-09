import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveItem }) => {
    
    let message;
    if (cart.length === 0) {
        message = <p>Please buy, at least one item!!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>At least buy one for you</h3>
            <p>Another for your beautiful lady!!</p>
            <small>And at least one product buy your lovable son!!!</small>
        </div>
    }
    else {
        message = <p>Thanks for buying,enjoy your purchase!!!</p>
    }

    return (
        <div>
            <h1 className={cart.length=== 2 ? `orange`: `purple`}>Order Summary</h1>
            <h5 className={`bold ${cart.length === 4 ? 'blue' : 'yellow'}`}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key = {tshirt.id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {cart.length === 3 ? <p>Do want to gift three person?</p> : <p>Okay, then buy it! for gift</p>}
            <p>And(&&) operator</p>
            {cart.length === 2 && <h2>Double item selected</h2>}
            <p>OR (||) operator</p>
            {cart.length === 4 || <p>you did not selected 4 items!</p>}
        </div>
    );
};

export default Cart;

/*
Conditional Rendering
1, Using element in a variable and use if-else statements to the value
2,ternary operator condition ? true : false 
3,&& operator (if condition is true, i want to display something)
4,Or operator ||(if condition is false, i want to display something)
*/