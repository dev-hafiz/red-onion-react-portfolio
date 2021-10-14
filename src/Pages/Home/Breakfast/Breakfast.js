import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MiddleNav from '../MiddleNav/MiddleNav';
import Singlefood from '../Snglefood/Singlefood';
import './Breakfast.css';

const Breakfast = () => {
     const [breakfast, setBreakfast] = useState([]);
     useEffect(()=>{
          fetch('/breakfast.json')
          .then(res => res.json())
          .then(data => setBreakfast(data));
     },[])

     return (
          <div className="d-flex justify-content-center">
              <div className="container">
                         <MiddleNav/>
               <div className="row">
                    {
                         breakfast.map(singleFood => <Singlefood
                         key = {singleFood.id}
                         singleFood = {singleFood}
                         / >)
                    }
               </div>
              </div> 
          </div>
     );
};

export default Breakfast;