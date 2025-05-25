import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


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
        path:'/footer',
        element: <Footer></Footer>
      }
    ]

    
  },
]);