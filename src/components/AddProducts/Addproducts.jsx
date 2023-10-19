import swal from "sweetalert";
const Addproducts = () => {
   
    const handleAddProducts = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brand= form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const url = form.url.value;
        const sliderone = form.url.value;
        const slidertow = form.url.value;
        const sliderthree = form.url.value;

        const description = form.description.value;  
        const addproducts = {name,brand,rating,type,price,url,sliderone,slidertow,sliderthree,description}
        console.log(addproducts);
        
        // send data
        fetch('http://localhost:5000/product',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addproducts)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                swal("Product Added","","success");
            }
        })   
        
    }

    return (
        <div>

         <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/6YP3XpR/charlesdeluvio-FK81rxil-UXg-unsplash.jpg)'}}>
           <div className="hero-overlay bg-opacity-80"></div>
             <div className="hero-content text-center text-neutral-content">
                <div className="">              
                <div>
                <div className="">
                    <div className="p-10">
                     <form onSubmit={handleAddProducts} >
                      <div className="">
                      <div className="form-control  grid  md:grid-cols-2 gap-5 justify-center mx-auto">
                         <div className="">
                         <label className="label">
                           <span className="label-text text-green-500 font-semibold">Name</span>
                           </label>
                            <label className="input-group">
                           
                            <input type="text" placeholder="Enter product name" name="name" className="input input-bordered" />                
                            </label>
                
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Brand</span>
                           </label>                                                        
                            <label className="input-group">
                            
                            <input type="text" placeholder="Enter brand name"name="brand" className="input input-bordered" />                
                            </label>
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Type</span>
                           </label>
                            <label className="input-group">
                        
                            <input type="text" placeholder="Enter type" name="type" className="input input-bordered" />                
                            </label> 
                         </div>
                         <div>
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Price</span>
                           </label>
                            <label className="input-group">
                            
                            <input type="text" placeholder="price" name="price" className="input input-bordered" />                
                            </label>
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Description</span>
                           </label>
                            <label className="input-group">
                           
                            <input type="text" placeholder=" Description"name="description" className="input input-bordered" />                
                            </label> 
                            <label className="label">
                           <span className="label-text text-green-500 font-semibold">Rating</span>
                           </label>
                            <label className="input-group">
                            
                            <input type="text" placeholder="Enter Rating" name="rating" className="input  " />                
                            </label> 
                         </div>
                         </div>
                      </div>
                      <label className="label">
                           <span className="label-text text-green-500 font-semibold" >Photo</span>
                           </label>
                            <label className="input-group">
                            <input  type="text" placeholder="Enter photo URL" name="url" className="input input-bordered w-full" />                                     
                            </label>
                           
                            <button className="btn bg-[#55ae00] w-full mt-4">Add Product</button>   
                        </form>                   
                    </div>
                </div>
                </div>

{/* <SliderInput></SliderInput>
<BrandInput></BrandInput> */}
        </div>
      </div>
   </div>
         
        </div>
    );
};

export default Addproducts;



