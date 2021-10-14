import React from 'react';
import { useParams } from 'react-router';
import './FoodDetail.css';

const FoodDetail = () => {
     const {foodId} = useParams();
     return (
          <div className="container my-5 py-5">
               <h1>Your food detail {foodId}</h1>
          </div>
     );
};

export default FoodDetail;