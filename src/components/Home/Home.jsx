import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceBrand from "./ServiceCatagory/ServiceBrand";



const Home = () => {

 const products = useLoaderData();
    return (
        <div>
          <Banner></Banner>
         <div className="flex justify-center items-center gap-12 p-10">
         {
          products?.map(product =><ServiceBrand key={product._id} product={product} ></ServiceBrand>)
         }
         </div>
         <div>
       
         </div>
        </div>
    );
};

export default Home;