
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../../config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);

    const createUser = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignIN = (email , password) =>{
        
        return signInWithEmailAndPassword(auth , email ,password)
       }

       const logOut = () =>{
     
        return signOut(auth);
    }

    const googleLogin = () =>{
      
        return signInWithPopup(auth,googleProvider)
    }
       
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            console.log("user in the auth satate chamged")
           setUser(currentUser)
       
        });
        return () =>{
            unSubscribe();
        }
    
    },[])

    

    const authInfo = {
    user,
    createUser,
    SignIN,
    logOut,
    googleLogin,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;