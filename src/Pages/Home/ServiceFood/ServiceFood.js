import React from 'react';
import './ServiceFood.css';
import biraniFood from '../../../images/Image/adult-blur-blurred-background-687824.png';
import chefCook from '../../../images/Image/chef-cook-food-33614.png';
import homedelevery from '../../../images/Image/architecture-building-city-2047397.png';
import busIcon from '../../../images/ICON/Group 204.png';
import alremIcon from '../../../images/ICON/Group 1133.png';
import banIcon from '../../../images/ICON/Group 245.png';

const ServiceFood = () => {
     return (
          <div>
               <div className="container my-5 py-5">
               <div className="w-50 my-5">
                    <h1 className="fw-normal">Why you choose us</h1>
                    <p>Barton waited twenty always repair in with in we do. And delighted offending curiosity my is dashwoods. Boy  prosperous increasing sourrounded.</p>
               </div>
                  <div className="row">

                         <div className="col-lg-4 mb-3">
                              <img className="img-fluid" src={biraniFood} alt="" />
                              <div className="row">
                                   <div className="col-lg-2 ">
                                        <img className="p-2" src={busIcon} alt="" />
                                   </div>
                                   <div className="col-lg-10 mt-3 ">
                                        <h5>Fast delevery</h5>
                                        <p>Keep your system in sync with automated web hook base notifications is time link and paid it how we dream about uor future </p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-4 mb-3 ">
                         <img className="img-fluid" src={chefCook} alt="" />
                         <div className="row">
                                   <div className="col-lg-2 ">
                                        <img className="p-2" src={alremIcon} alt="" />
                                   </div>
                                   <div className="col-lg-10 mt-3 ">
                                        <h5>A Good Auto Responder</h5>
                                        <p>Keep your system in sync with automated web hook base notifications is time link and paid it how we dream about uor future </p>
                                   </div>
                              </div>
                         </div>
                         <div className="col-lg-4 mb-3">
                         <img className="img-fluid" src={homedelevery} alt="" />
                         <div className="row">
                                   <div className="col-lg-2 ">
                                        <img className="p-2" src={banIcon} alt="" />
                                   </div>
                                   <div className="col-lg-10 mt-3 ">
                                        <h5>Home delevery</h5>
                                        <p>Keep your system in sync with automated web hook base notifications is time link and paid it how we dream about uor future </p>
                                   </div>
                              </div>
                         </div>
                  </div>
               </div>
          </div>
     );
};

export default ServiceFood;