import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase';



const LogIn = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login With Google</button>
            <button>Login With Facebook </button>
        </div>
    );
};

export default LogIn;