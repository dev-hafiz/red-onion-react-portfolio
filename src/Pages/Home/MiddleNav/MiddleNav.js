import React from 'react';
import { NavLink } from 'react-router-dom';
import './MiddleNav.css';


const MiddleNav = () => {
     const navMiddle = {
          textDecoration : "none",
          marginRight : "30px",
          color : "#000",
          fontWeight :"bolder",
          
     }
     
     return (
          <div className="text-center">
               <div className="container">
                    <div className="middle-nav">
                         <NavLink  style={navMiddle} to="/breakfast">Breakfast</NavLink>
                         <NavLink  style={navMiddle}  to="/lunch">Lunch</NavLink>
                         <NavLink  style={navMiddle}  to="/dinner">Dinner</NavLink>
                    </div>
               </div>
          </div>
     );
};

export default MiddleNav;