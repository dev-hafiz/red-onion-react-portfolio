import React from 'react';
import './Footer.css';
import bottomLogo from '../../../images/logo.png';
import { NavLink } from 'react-router-dom';


const Footer = () => {
     const navStyle = {
          textDecoration : "none",
          color: "#FFF",
          fontSize: "16px",
          margin :"20px"
     } 
     return (
          <div className="Footer-bottom">
              <div className="container">
                   <div className="row">
                        <div className="col-lg-6">
                            <img width="160px" src={bottomLogo} alt="" />
                            
                        </div>
                        <div className="col-lg-3">
                        <NavLink style={navStyle} to="/onlinefood">About Online Food</NavLink> <br />
                        <NavLink style={navStyle} to="/readblog">Read Our Blogs</NavLink> <br />
                        <NavLink style={navStyle} to="/shipping">Sign-Up to delivery</NavLink> <br />
                        <NavLink style={navStyle} to="/visitrestaurant">Visit rastaurant</NavLink> 
                        </div>
                        <div className="col-lg-3">
                        <NavLink style={navStyle} to="">Get help</NavLink> <br />
                        <NavLink style={navStyle} to="">Read FAQs</NavLink> <br />
                        <NavLink style={navStyle} to="">View all cities</NavLink> <br />
                        <NavLink style={navStyle} to="/visitrestaurant">Restaurant near me</NavLink> 
                        </div>
                   </div>
                   <div className="row">
                        <div className="col-lg-6">
                        <p className="copyText">Copyright © 2021 Online food</p> 
                        </div>
                        <div className="col-lg-6 justify-content-end d-flex bottom-privacy">

                        <NavLink style={navStyle} to="">Privacy Policy</NavLink> <br />
                        <NavLink style={navStyle} to="">Terms of USE</NavLink> <br />
                        <NavLink style={navStyle} to="">Pricing</NavLink> <br />

                        </div>
                   </div>
              </div>
          </div>
     );
};

export default Footer;