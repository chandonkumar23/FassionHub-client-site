import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceBrand = ({product}) => {
    const {name , url} = product;
    return (
        <div className="  ">
          <div>
            <div>
               
               
              <Link to={`/products/${name}`}>
              <img className="h-[100px] w-[100px]" src={url} alt="" />
                <h2 className="text-2xl lg:text-3xl font-bold underline hover:text-red-600">{name}</h2>
                </Link>
               
            </div>
          </div>           
        </div>
    );
};

export default ServiceBrand;