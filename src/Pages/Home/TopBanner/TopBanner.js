import React from 'react';
import './TopBanner.css';
import topBanner from '../../../images/bannerbackground.png';

const TopBanner = () => {
     return (
          <div style={{ backgroundImage: 'url(' + topBanner + ')', backgroundSize: 'auto' , height: "100vh", width:"100%"}}>
             <div className="container d-flex justify-content-center">
               <div className="hero-text text-center">
                    <h1>Best food waiting for your belly</h1>
                    <div className="input-sec">
                         <input placeholder="Search food items" type="text" name="" id="" />
                         <button className="btn-search">Search</button>
                    </div>
               </div>
             </div>
          </div>
     );
};

export default TopBanner;