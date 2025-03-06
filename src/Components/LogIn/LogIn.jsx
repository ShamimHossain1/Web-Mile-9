import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase';



const LogIn = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
                setUser(null);
            });
    }
    const handleGitSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
                setUser(null);
            });
    }



    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }


    return (
        <div>
            {user ?
                <button onClick={handleSignout}>Sign Out</button> : <div><button onClick={handleGoogleSignIn}>Login With Google</button> <button onClick={handleGitSignIn}>Login With Git Hub</button> <button>Login With Facebook </button></div>
            }
            
            {
                user && <div>
                    <h1>Welcome, {user.displayName}</h1>
                </div>
            }

            
        </div>
    );
};

export default LogIn;