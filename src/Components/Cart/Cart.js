import React from 'react';

const Cart = ({cart,handleRemoveItem}) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <h5>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key = {tshirt.id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;