import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Cart from '../Cart/Cart';
import SingleFoodDetail from '../SingleFoodDetail/SingleFoodDetail';
import './FoodDetail.css';

const FoodDetail = () => {
     const {foodId} = useParams();

     const [details, setDetails] = useState([])
     
     useEffect( ()=>{
          fetch('/breakfast.json')
          .then(res => res.json())
          .then(data => setDetails(data.filter(el => el.id == foodId)))
     },[])

     const [cart, setCart] = useState([])
     console.log(cart);
     const handleCart = detail =>{
          const newCart = [...cart, detail];
          setCart(newCart)
     }

     return (
          <div className="container my-5 py-5">
          <div className="">
              {
               details.map(detail => <SingleFoodDetail
               handleCart={handleCart}
               detail={detail}
                key={detail.id}></SingleFoodDetail>)  
              }
          </div>
          <div className="cart-container">
               <Cart cart={cart} ></Cart>
          </div>
              
          </div>
     );
};

export default FoodDetail;