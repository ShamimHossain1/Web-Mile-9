import React, { useContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {
    // const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const navigate = useNavigate();

    const { user, setUser, userSignIn } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                navigate('/');
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
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                setUser(null);
            });
    }


    const handleSignIn = (e) => {
        e.preventDefault();

        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         setUser(user);
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setUser(null);
        //         console.log(errorMessage);
        //     });

        userSignIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setUser(null);
                console.log(errorMessage);
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
        <div className="flex justify-center items-center h-screen ">
            <div className="p-8 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-semibold mb-4">Welcome to Our App</h2>
                {user ? (
                    <div>
                        <h3 className="text-lg font-medium mb-2">Hello, {user.displayName}</h3>
                        <button
                            onClick={handleSignout}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <form onSubmit={handleSignIn} action="">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-4 py-2 border rounded-lg"
                            />
                            <button
                                type="submit"
                                className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                                Login
                            </button>
                        </form>
                        <h4>Or</h4>
                        <button
                            onClick={() => navigate('/regester')}
                            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                            Register
                        </button>
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                            Login with Google
                        </button>
                        <button
                            onClick={handleGitSignIn}
                            className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition">
                            Login with GitHub
                        </button>
                        <button
                            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
                            Login with Facebook
                        </button>

                    </div>
                )}
            </div>
        </div>
    );
};

export default LogIn;