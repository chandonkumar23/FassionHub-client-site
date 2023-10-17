import { Link } from "react-router-dom";

const Login = () => {
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
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white ">Password</span>
             </label>
             <input type="password" placeholder="password" className="input input-bordered" required />
           </div>
           <div className="form-control mt-6">
          <button className="btn btn-[#3ea73e]">Login</button>
        </div>
      </form>
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