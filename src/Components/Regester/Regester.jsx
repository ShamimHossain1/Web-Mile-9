import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const[show, setShow] = useState(true);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(email, password, confirmPassword);
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User registered with:", user);
                alert("User registered successfully!");
                navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });
        // console.log("User registered with:", email, password);
    };

    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="p-8 rounded-lg shadow-lg w-96 text-center">
                <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type={show ? "password" : "text"}
                        name='password'
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        type={show ? "password" : "text"}
                        name='confirmPassword'
                        placeholder="Confirm Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    /><span className='border' onClick={()=>setShow(!show)}>{show?"Show Pass":"Hide Pass"}</span>
                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-sm">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </div>
        </div>
    );
};

export default Register;