import { useLoaderData, useParams } from "react-router-dom";
import DetailesCart from "../DetailesInfo/DetailesCart";

const Detailes = () => {
    const products = useLoaderData()
  
    
    const {name}=useParams();
    
    const findProducts = products?.find(produc=>produc.name === name)
    console.log(findProducts)
    
    return (
        <div>
            
               
              <DetailesCart findProducts={findProducts}></DetailesCart>
            
          
        </div>
    );
};

export default Detailes;