import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";

import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import AllClasses from "../components/AllClasses";
import ManageMyItem from "../components/ManageMyItem";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Home from "../components/Pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/navber',
        element:<Navbar></Navbar> 
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path:'/ManageMyItem',
        element: <ManageMyItem></ManageMyItem>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/footer',
        element: <Footer></Footer>
      }
    ]

    
  },
]);