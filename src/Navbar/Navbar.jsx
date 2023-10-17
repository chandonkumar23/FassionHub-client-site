import { Link } from "react-router-dom";

const Navbar = () => {
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
        <li><Link to={"/card"}>My Carts</Link></li>
        
      
      </ul>
    </div>
  <img src="https://i.ibb.co/V9vMwt6/OIP-removebg-preview-1-1.png" alt="" /> <h2 className="text-3xl font-semibold">Fassion <span className="text-red-600">Hub</span></h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className="font-semibold text-xl"><Link to={"/"}>Home</Link></li>
        <li className="font-semibold text-xl"><Link to={"/add"}>Add Product</Link></li>
        <li className="font-semibold text-xl" ><Link to={"/cart"}>My Carts</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>Name</li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
    </div>




  </div>
</div>
        </div>
    );
};

export default Navbar;