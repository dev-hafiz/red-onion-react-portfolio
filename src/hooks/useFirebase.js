import initializeAuthentication from "../Pages/Home/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut  } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication()

const useFirebase = () =>{

     const  [user, setUser] = useState({})

     const googleProvider = new GoogleAuthProvider();  
     const auth = getAuth();

     const googleSignInUser = () =>{
         return signInWithPopup(auth, googleProvider)
         
     }

     const signOutHandler = () =>{
          signOut(auth).then(() => {
              setUser({})
             })
     }

     useEffect( ()=>{
          onAuthStateChanged(auth, user =>{
               if (user){
                    setUser(user)
               }
               else{
                    setUser({})
               }
          })
     },[])

     return{
          user,
          googleSignInUser,
          signOutHandler

     }
}

export default useFirebase;