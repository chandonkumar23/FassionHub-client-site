import swal from "sweetalert";


const BrandInput = () => {

    const handleBrand = event =>{
        event.preventDefault();

        const form = event.target;
        const brand = form.brand.value;
        const url = form.url.value; 
        const addBrands = {brand,url}
        console.log(addBrands);
        
        // send data
        fetch('http://localhost:5000/brand',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addBrands)
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
          <form onSubmit={handleBrand}>
          <label className="label">
        <span className="label-text text-green-500 font-semibold">Name</span>
       </label>
          <label className="input-group">
            <input type="text" placeholder="Enter product name" name="brand" className="input input-bordered" />                
             </label>
             <label className="label">
             <span className="label-text text-green-500 font-semibold" >Photo</span>
                 </label>
                  <label className="input-group">           
                  <input  type="text" placeholder="Enter photo URL" name="url" className="input input-bordered w-full" />                               
                   </label>
                   <button className="btn bg-[#55ae00] w-full mt-4">Add Product</button>   
          </form>
        </div>
    );
};

export default BrandInput;