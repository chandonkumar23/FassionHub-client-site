/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import Slider from "../Slider/Slider";

const Brands = ({product} ) => {
    const {name,brand,rating,type,price,url,description} =  product || {};
    
    return (
      
        <div className="p-6">
          
            <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-[300px]" src={url} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">
         {name}
       <div className="badge badge-secondary">{brand}
       </div> <h2>Price: $ {price}</h2>
     </h2>
     <p>{description}</p>
      <div className="card-actions justify-end">
      <div className="badge badge-outline"> Reting: {rating}<AiFillStar className="text-yellow-500 font-bold"></AiFillStar></div> 
      <div className="badge badge-outline">{type}</div>
    </div>
    <button></button>
  </div>
</div>

                
            
        </div>
    );
};

export default Brands;