import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);
  const { setUser, logIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log("User created successfully:", user);
        Navigate(location.state ? location.state : '/');
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  }

  return (
    <div className="flex mt-32  items-center justify-center ">
      <div className="bg-white w-1/4   p-8 rounded-md shadow-md">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t Have An Account?{' '}
            <Link to={"/auth/register"} className="text-red-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;