import { useLoaderData, useParams } from "react-router-dom";
import Brands from "../Brands/Brands";

const BrandCollection = () => {
    
    const products = useLoaderData()
  
    
    const {name}=useParams();
    
    const findBrand = products?.filter(product=>product.brand === name)
    console.log(findBrand)
    

    return (
        <div className="grid lg:grid-cols-2 max-w-3/4 mx-auto gap-10">
            {
                findBrand.map(product=><Brands key={product._id} product={product}></Brands>)
            }
         
      {/* {
           
            products?.map(brand =><Brands key={brand._id} products={products}></Brands>)
           
      } */}
     
            
        </div>
    );
};

export default BrandCollection;