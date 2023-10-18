/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import swal from "sweetalert";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {

    const { SignIN} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [sinerror , setSinerror] = useState('');
    
const handleLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    SignIN(email , password)
    .then(result =>{
      if(SignIN){
        swal("Log In", "", "success");
      }
      navigate(location ?.state ? location.state : '/' );
   
    })
    .catch(error =>{
      setSinerror.error(error.message)
    })
   
}

    return (
        <div>
 <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pJKDS6S/paul-steuber-rs11hu-bk-Tc-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">     
    <div className="hero min-h-screen">
  <div className="hero-content flex-col ">  
  <div>
    <h2 className="text-2xl">Login</h2>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700 bg-opacity-60 border-2 ">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white ">Password</span>
             </label>
             <input type="password" placeholder="password" name="password" className="input input-bordered" required />
             {
              sinerror && <p className="text-red-700">{sinerror}</p>
             }
           </div>
           <div className="form-control mt-6">
          <button className="btn btn-[#3ea73e]">Login</button>
        </div>
      </form>
     <GoogleLogin></GoogleLogin>
      <p>Do not have an account <Link className="text-red-600 font-semibold" to={'/rejister'}>Rejister</Link></p>
      </div>
     </div>
     </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Login;