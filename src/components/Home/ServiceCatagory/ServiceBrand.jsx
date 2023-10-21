import { Link } from "react-router-dom";


/* eslint-disable react/prop-types */
const ServiceBrand = ({product}) => {
    const {brand , url} = product;
    return (
        <div className="  ">
          <div>
            <div className="border-4 border-red-500 p-8 rounded-lg"> 
           
              <Link to={`/products/${brand}`}>
              <img className="h-[100px] w-[100px]" src={url} alt="" />
                <h2 className="text-2xl lg:text-3xl font-bold underline hover:text-red-600">{brand}</h2>
              </Link>       
            </div>
          </div>  
                 
        </div>
       
    );
};

export default ServiceBrand;