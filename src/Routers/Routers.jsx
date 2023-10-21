import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import Addproducts from "../components/AddProducts/Addproducts";
import Mycart from "../components/Cart/Mycart";
import Login from "../components/LoginForm/Login";
import Rejister from "../components/Rejister/rejister";
import BrandCollection from "../components/BrandCollection/BrandCollection";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import Detailes from "../components/Detailes/Detailes";

import Update from "../components/Update/Update";
import ErrorPage from "../components/ErrorPage/ErrorPage";




const routers = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/brand'),
            
        },
        {
            path:'/add',
            element:<PrivetRoute><Addproducts></Addproducts></PrivetRoute>
        },
        {
            path:'/cart/:uid',
            element: <PrivetRoute><Mycart></Mycart></PrivetRoute>,
            // loader:({params})=>fetch(`http://localhost:5000/addCart/${params.uid}`),
            loader:()=> fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/addCart'),
         
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Rejister></Rejister>
        },
        {
            path:'/products/:name',
            element:<PrivetRoute><BrandCollection></BrandCollection></PrivetRoute>,
            loader: () => fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/product'),
        },
        {
            path:'/detailes/:name',
            element: <PrivetRoute><Detailes></Detailes></PrivetRoute>,
            loader:() => fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/product'),
        },
        {
           path: '/update/:name',
           element:<Update></Update>,
           loader: ()=> fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/product')
        }
    ]
  }
])


export default routers;