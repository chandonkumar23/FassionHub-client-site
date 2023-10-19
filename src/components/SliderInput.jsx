import swal from "sweetalert";


const SliderInput = () => {

    const handleSlider = event =>{
        event.preventDefault();

        const form = event.target;
        const sliderone = form.sliderone.value;
        const slidertow = form.slidertow.value;
        const sliderthree = form.sliderthree.value;
       const allSlider = {sliderone,slidertow,sliderthree}
        console.log(allSlider);
        
        // send data
        fetch('http://localhost:5000/slider',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allSlider)
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
            <form onSubmit={handleSlider}>
                 <label className="input-group">           
                  <input  type="text" placeholder="Enter sliderone URL" name="sliderone" className="input input-bordered w-full" />                               
                   </label>
                   <label className="input-group">           
                  <input  type="text" placeholder="Enter slidertow URL" name="slidertow" className="input input-bordered w-full" />                               
                   </label>
                   <label className="input-group">           
                  <input  type="text" placeholder="Enter sliderthree URL" name="sliderthree" className="input input-bordered w-full" />                               
                   </label>
                   <button className="btn bg-[#55ae00] w-full mt-4">Add Product</button>  
            </form>
        </div>
    );
};

export default SliderInput;