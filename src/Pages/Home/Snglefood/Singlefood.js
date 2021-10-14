import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Singlefood.css';


const Singlefood = ({singleFood}) => {
     const { price, id, title, subTitle, description, subDescription, img1} = singleFood || {};
     return (
          <div className="col-lg-4 text-center">
              <div className="food-cart">
               <div className="d-flex justify-content-end">
                    <NavLink style={{color: "#F91944", fontSize: "20px"}} to={`/singlefood/${id}`}><i class="fas fa-arrow-circle-right"></i></NavLink>
               </div>
               <img className="img-fluid" src={img1} alt="" />
               <h5>{subTitle}</h5>
               <p>{subDescription}</p>
               <h6 className="text-danger"> -{price}-</h6>
              
              </div>
          </div>
     );
};

export default Singlefood;