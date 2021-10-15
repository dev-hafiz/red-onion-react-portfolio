import React from 'react';
import './Login.css';
import singInLogo from '../../../images/logo2.png';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
     const {googleSignInUser} = useAuth()
     const location = useLocation();
     const history = useHistory()
     const redirect_uri = location.state?.from || '/home'

     const handleGoogleSign = () =>{
          googleSignInUser()
          .then( result =>{
               // console.log(result.user);
               history.push(redirect_uri)
          })
     }

    
     return (
          <div>
               <div className="container">
               <div className="d-flex justify-content-center my-5 py-5">
                    <div className="register-form">
                         <div>
                         <img className="img-fluid" width="200px" src={singInLogo} alt="" />
                         </div>
                         <input type="email" name="" placeholder="Email" id="" />
                         <br />
                         <input type="password" name="" placeholder="Passord" id="" />
                         <br />
                         <button className="form-btn" type="submit">Log-In</button>
                         <br />
                         <button onClick={handleGoogleSign} className="form-btn" type="submit">Google Sign In</button>
                         <br />
                         <NavLink className="alert-sign" to="/signup">Don't have an accound ?</NavLink>
                    </div>
               </div>
                     
               </div>
          </div>
     );
};

export default Login;