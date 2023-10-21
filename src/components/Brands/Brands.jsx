/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Brands = ({product} ) => {
    const {name,brand,rating,type,price,url} =  product || {};
    
    return (
      
        <div className="p-6">
          
            <div className="card bg-base-100 shadow-lg  border-3 border-red-600">
            <figure><img className="h-[200px] w-[200px]" src={url} alt="Shoes" /></figure>
            <div className="card-body">
            <div className="card-title">
         {name}
       <div className="badge badge-secondary">{brand}
       </div> <h2>Price: $ {price}</h2>
       </div>
      <div className="card-actions justify-end">
      <div className="badge badge-outline"> Reting: {rating}<AiFillStar className="text-yellow-500 font-bold"></AiFillStar></div> 
      <div className="badge badge-outline">{type}</div>
    </div>
   <div className="flex">
   <Link className="btn  flex justify-center mx-auto w-[130px] bg-[#00b100] hover:bg-[#00e400]" to={`/detailes/${name}`}>Detailes</Link> 
   <Link className="btn  flex justify-center mx-auto w-[130px] bg-[#00b100] hover:bg-[#00e400]" to={`/update/${name}`}>update</Link>
   </div>
   
  </div>
</div>     
        </div>
    );
};

export default Brands;