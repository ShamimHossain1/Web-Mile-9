import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import Regester from './Components/Regester/Regester.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Order from './Components/Order/Order.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Profile from './Components/Profile/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
      {
        path: "/order",
        element:<PrivateRoute><Order></Order></PrivateRoute>,
      },
      {
        path: "/profile",
        element:<PrivateRoute><Profile></Profile></PrivateRoute>,
      }
    ],
  },

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
