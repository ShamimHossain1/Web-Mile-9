import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from '../layouts/Homelayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthProvider from '../../../Firebase-Auth/src/Providers/AuthProvider';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "",
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },

        ]
    },
    {
        path: "/news",
        element: <h1>News</h1>
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/auth/register",
                element: <RegisterPage></RegisterPage>
            },
        ]
    },
    
    {
        path: "*",
        element: <h1>Login</h1>
    }

]);

export default router;