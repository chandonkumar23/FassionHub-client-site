import { useContext,  } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../components/Authprovider/AuthProvider";
import swal from 'sweetalert';

const Navbar = () => {
    const {user ,logOut}= useContext(AuthContext)
   
    const handleLogOut= ()=>{
        logOut()
        .then(swal({
            title: "Log Out ",
            icon: "success",
            button:"ok"
          }))
        .catch()
    }
    return (
        <div>
            <div className="navbar bg-green-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/add"}>Add Product</Link></li>
        <li><Link to={"/cart/:uid"}>My Carts</Link></li>
        
      
      </ul>
    </div>
  <img src="https://i.ibb.co/V9vMwt6/OIP-removebg-preview-1-1.png" alt="" /> <h2 className="text-3xl font-semibold">Fassion <span className="text-red-600">Hub</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className="font-semibold text-xl"><NavLink to={"/"}>Home</NavLink></li>
        <li className="font-semibold text-xl"><NavLink to={"/add"}>Add Product</NavLink></li>
        <li className="font-semibold text-xl" ><NavLink to={"/cart/:uid"}>My Carts</NavLink></li>
        <li className="font-semibold text-xl" ><NavLink to={"/login"}>Login</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
 
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img className="border-3 border-red-600" src="https://i.ibb.co/379yQLs/OIP-3.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
      
      
        <li>    
        {
    user ? 
    <Link onClick={handleLogOut}> Logout </Link>
    :
              <Link to={'/login'}>Login</Link>
              
 }        
            
            </li>
      </ul>
    </div>




  </div>
</div>
        </div>







    );
};

export default Navbar;