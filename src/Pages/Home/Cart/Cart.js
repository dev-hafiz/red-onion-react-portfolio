import React from 'react';

const Cart = ({cart}) => {
    
     
     const totalReducer = (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue.price)
     const total = cart.reduce(totalReducer, 0) 
     
     const shipping = total > 0 ? 15 : 0;
     const tax = (total + shipping) * 0.10;
     const grandTotal = total + shipping + tax;
     
     return (
          <div>
          
          <p>SubTotal  {cart.length} item   <b>$ {total.toFixed(2)}</b> </p>
          <p>Tax : <b>{tax.toFixed(2)}</b></p>
          <p>Shipping : <b>{shipping.toFixed(2)}</b></p>
          <p>Grand-Total : <b>{grandTotal.toFixed(2)}</b></p>
         
          </div>
     );
};

export default Cart;