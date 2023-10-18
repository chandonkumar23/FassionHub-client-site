import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import swal from "sweetalert";


const Rejister = () => {
    const{ createUser } = useContext(AuthContext)
    const[rejError , setRejError] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const pURL = form.get('pURL');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,pURL,email,password);
         if(password.length < 6){
          setRejError("password must be 6 characters")
          return;
         }
         else if (!/[A-Z]/.test(password)){
          setRejError("Don't have a capital character")
          return
         }
         else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          setRejError("Don't have a special character")
          return
         }
           setRejError('')
        createUser(email , password)
        .then(result =>{
            console.log(result.user)
            if(createUser){
              swal("thank You", "Successfully Registered","success")
            }
        })
        .catch(error =>{
            console.error(error)
            console.error(error)
            setRejError(error.message)
        })
    }

    return (
        <div>
              <div>
 <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/pJKDS6S/paul-steuber-rs11hu-bk-Tc-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">     
    <div className="hero min-h-screen">
  <div className="hero-content flex-col ">  
  <div>
    <h2 className="text-2xl">Rejister Now</h2>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-700 bg-opacity-60 border-2 ">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">  
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">  
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input type="text" placeholder="email" name="pURL" className="input input-bordered" required />
        </div>
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
           </div>
           {
            rejError && <p className="text-red-700">{rejError}</p>
           }
           <div className="form-control mt-6">
          <button className="btn btn-[#3ea73e]">Rejister</button>
        </div>
      </form>
      <p>Already have an account <Link className="text-red-600 font-semibold" to={'/login'}>Login</Link></p>
      </div>
     </div>
     </div>
    </div>
  </div>
</div>
</div>
</div>
    );
};

export default Rejister;