import React from 'react';
import './SignUp.css';
import singInLogo from '../../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
     const {user, googleSignInUser} = useAuth()
     return (
          <div>
              <div className="container">
               <div className="d-flex justify-content-center my-5 py-5">
                    <div className="register-form">
                         <div>
                         <img className="img-fluid" width="200px" src={singInLogo} alt="" />
                         </div>
                         <input  name="" placeholder="Name" id="" />
                         <br />
                         <input type="email" name="" placeholder="Email" id="" />
                         <br />
                         <input type="password" name="" placeholder="Passord" id="" />
                         <br />
                         <input type="password" name="" placeholder="Re-password" id="" />
                         <br />
                         <button className="form-btn" type="submit">Sign-Up</button>
                         <br />
                         <button onClick={googleSignInUser} className="form-btn" type="submit">Google Sign In</button>
                         <br />
                         <NavLink className="alert-sign" to="/login">Already have an accound ?</NavLink>
                    </div>
               </div>
                     
               </div>
          </div>
     );
};

export default SignUp;