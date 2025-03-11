import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from '../layouts/Homelayout';
import CategoryNews from '../Pages/CategoryNews';

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
        path: "/login",
        element: <h1>Login</h1>
    },
    {
        path: "/register",
        element: <h1>Register</h1>
    },
    {
        path: "*",
        element: <h1>Login</h1>
    }

]);

export default router;