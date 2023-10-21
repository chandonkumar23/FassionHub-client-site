import { useLoaderData, useParams } from "react-router-dom";
import Brands from "../Brands/Brands";
import Slider from "../Slider/Slider";

const BrandCollection = () => {
    
    const products = useLoaderData()
  
    
    const {name}=useParams();
    
    const findBrand = products?.filter(product=>product.brand === name)
    console.log(findBrand)
    

    return (
        <div>
             <div>
            <Slider></Slider>
            </div>
            
          <div className="grid lg:grid-cols-2 max-w-3/5 mx-auto gap-10">
          {
                findBrand.map(product=><Brands key={product._id} product={product}></Brands>)
            }
          </div>
         
      
        
            
        </div>
    );
};

export default BrandCollection;