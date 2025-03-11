import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import HomeLayout from '../layouts/Homelayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />
    },
    {
        path:"/news",
        element: <h1>News</h1>
    },
    {
        path:"/login",
        element: <h1>Login</h1>
    },
    {
        path:"/register",
        element: <h1>Register</h1>
    },
    {
        path:"*",
        element: <h1>Login</h1>
    }
    
]);

export default router;