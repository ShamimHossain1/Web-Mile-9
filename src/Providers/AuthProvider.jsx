import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);


    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const userSignIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);

    }

    console.log(user);

useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        if(currentUser){
            setUser(currentUser);
        }else{
            setUser(null);
        }
    });

    return () => {
        unSubscribe();
    };
}, []);


    const authInfo = {user, setUser, createUser,userSignIn};
 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;