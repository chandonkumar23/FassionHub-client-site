import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {
    const data = useLoaderData();
    const {name}=useParams();
    
    const findProducts = data?.find(produc=>produc.name === name)
    console.log(findProducts)
    const {brand,rating,type,price,url} = findProducts;


   
    

    
    return (
        <div>
            
              <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/6YP3XpR/charlesdeluvio-FK81rxil-UXg-unsplash.jpg)'}}>
           <div className="hero-overlay bg-opacity-80"></div>
             <div className="hero-content text-center text-neutral-content">
                <div className="">              
                <div>
                <div className="">
                    <div className="p-10">
                     <form>
                      <div className="">
                      <div className="form-control  grid  md:grid-cols-2 gap-5 justify-center mx-auto">
                         <div className="">
                         <label className="label">
                           <span className="label-text text-green-500 font-semibold">Name</span>
                           </label>
                            <label className="input-group">
                           
                            <input type="text" defaultValue={name} placeholder="Enter product name" name="name"  className="input input-bordered" />                
                            </label>
                
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Brand</span>
                           </label>                                                        
                            <label className="input-group">
                            
                            <input type="text" defaultValue={brand} placeholder="Enter brand name"name="brand" className="input input-bordered" />                
                            </label>
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Type</span>
                           </label>
                            <label className="input-group">
                        
                            <input type="text" defaultValue={type} placeholder="Enter type" name="type" className="input input-bordered" />                
                            </label> 
                         </div>
                         <div>
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Price</span>
                           </label>
                            <label className="input-group">
                            
                            <input type="text" defaultValue={price} placeholder="price" name="price" className="input input-bordered" />                
                            </label>

                            <label className="label">
                           <span className="label-text text-green-500 font-semibold" >Photo</span>
                           </label>
                            <label className="input-group">
                            <input  type="text" defaultValue={url} placeholder="Enter photo URL" name="url" className="input input-bordered " />                                     
                            </label>
                           
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Rating</span>
                           </label>
                            <label className="input-group">
                            
                            <input type="text" defaultValue={rating} placeholder="Enter Rating" name="rating" className="input  " />                
                            </label> 
                         </div>
                         </div>
                      </div>
                      
                           
                            <button className="btn bg-[#55ae00] w-full mt-4">submit</button>   
                        </form>                   
                    </div>
                </div>
                </div>
        </div>
      </div>
   </div>
   
        </div>
    );
};

export default Update;