import { useLoaderData, useParams } from "react-router-dom";
import Brands from "../Brands/Brands";

const BrandCollection = () => {
    const products = useLoaderData()
    const {id}=useParams();
    
    const findBrand = products?.find(brand=>brand._id ===id)

    return (
        <div>
         <Brands findBrand={findBrand}></Brands>

            
        </div>
    );
};

export default BrandCollection;