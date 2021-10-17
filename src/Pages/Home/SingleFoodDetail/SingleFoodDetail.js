import React from 'react';
import { useState } from 'react';
import './SingleFoodDetail.css';

const SingleFoodDetail = ({detail, handleCart}) => {
     const {title, description, img1, img2, img3, price} = detail || {};

   

     return (
          <>
          <div className="row d-flex justify-content-center align-items-center">
               <div className="col-lg-6">
                   <div>
                   <h2 className="fd-title">{title}</h2>
                    <p className="fd-param">{description}</p>
                    
                   </div>
                   <div className="d-flex ">
                   <h3 className="price-level">{price}</h3> 
                   </div>
                   <button onClick={ ()=> handleCart(detail)} className="add"> <i class="fas fa-cart-plus"></i> Add</button>
                  

               </div>
               <div className="col-lg-6">
                    <img className="img-fluid" src={img1} alt="" />
               </div>
          </div>
          <div className="row">
          <div className="d-flex w-25">
            <img  className="img-fluid" src={img2} alt="" />
             <img  className="img-fluid" src={img3} alt="" />
          </div>
          </div>
          </>
     );
};

export default SingleFoodDetail;