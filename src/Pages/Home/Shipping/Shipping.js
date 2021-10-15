import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import './Shipping.css';


const Shipping = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data =>{
          console.log(data)
     };
     const {user} = useAuth()
     return (
          <div>
               <div className="container my-5 py-5">
               <div className="row ">
               <div className="col-lg-7 shipping-form d-flex justify-content-center">
                          
                    <form onSubmit={handleSubmit(onSubmit)}>
                         
                         <input defaultValue={user.displayName} {...register("name")} />
                         <br />
                         <input defaultValue={user.email} {...register("email")} />
                         <br />
                         <input placeholder="city" defaultValue="" {...register("address")} />
                         <br />
                         <input placeholder="road" defaultValue="" {...register("road")} />
                         <br />
                         <input placeholder="flat, suite or floor" defaultValue="" {...register("home")} />
                         <br />
                         
                         
                         <br />
                         
                         {errors.email && <span>This field is required</span>}
                         
                         <input className="shipping-sbumit" type="submit" value=" save & continue" />
                    </form>
                                        
               </div>
               <div className="col-lg-5">

               </div>

               </div>

               </div>
          </div>
     );
};

export default Shipping;