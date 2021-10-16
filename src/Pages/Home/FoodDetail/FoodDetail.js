import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import SingleFoodDetail from '../SingleFoodDetail/SingleFoodDetail';
import './FoodDetail.css';

const FoodDetail = () => {
     const {foodId} = useParams();

     const [details, setDetails] = useState([])
     console.log(details)
     useEffect( ()=>{
          fetch('/breakfast.json')
          .then(res => res.json())
          .then(data => setDetails(data.filter(el => el.id == foodId)))
     },[])

     return (
          <div className="container my-5 py-5">
          <div className="">
              {
               details.map(detail => <SingleFoodDetail
               detail={detail}
                key={detail.id}></SingleFoodDetail>)  
              }
          </div>
              
          </div>
     );
};

export default FoodDetail;