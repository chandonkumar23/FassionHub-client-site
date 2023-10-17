import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../components/Home/Home";
import Addproducts from "../components/AddProducts/Addproducts";
import Mycart from "../components/Cart/Mycart";
import Login from "../components/LoginForm/Login";
import Rejister from "../components/Rejister/rejister";




const routers = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/add',
            element:<Addproducts></Addproducts>
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
        }
    ]
  }
])


export default routers;