import React, { createContext, use, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth";
import auth from '../Firebase';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    };

    const logIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }


    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    },[])



    const authInfo = { user, setUser, createNewUser,logIn,logOut,googleLogin };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;