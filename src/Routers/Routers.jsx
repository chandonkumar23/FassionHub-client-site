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




const routers = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/brand'),
            
        },
        {
            path:'/add',
            element:<PrivetRoute><Addproducts></Addproducts></PrivetRoute>
        },
        {
            path:'/cart',
            element:<Mycart></Mycart>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/rejister',
            element:<Rejister></Rejister>
        },
        {
            path:'/products/:name',
            element:<PrivetRoute><BrandCollection></BrandCollection></PrivetRoute>,
            loader: () => fetch('http://localhost:5000/product'),
        },
        {
            path:'/detailes/:name',
            element:<Detailes></Detailes>,
            loader:() => fetch('http://localhost:5000/product'),
        }
        
    ]
  }
])


export default routers;