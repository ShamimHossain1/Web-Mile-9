import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white w-full max-w-md p-8 rounded-md shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-6">
        Register your account
      </h2>

      {/* Form */}
      <form>
        {/* Your Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Photo URL */}
        <div className="mb-4">
          <label
            htmlFor="photoUrl"
            className="block text-gray-700 font-medium mb-2"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            placeholder="Enter your photo URL"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
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
            id="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-indigo-600"
          />
          <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
            Accept{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Term & Conditions
            </a>
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
        >
          Register
        </button>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already Have An Account?{' '}
          <Link  to={"/auth/login"} className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  </div>
);
};

export default RegisterPage;