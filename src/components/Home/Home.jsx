import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceBrand from "./ServiceCatagory/ServiceBrand";
import Mall from "../Mall/Mall";



const Home = () => {

 const products = useLoaderData();
    return (
        <div>
          <Banner></Banner>
          <h1 className="text-center p-8 text-4xl font-extrabold">Our <span className="text-red-600">Brand</span></h1>
         <div className="flex-1 lg:flex justify-center items-center gap-12 p-10">
          
         {
          products?.map(product =><ServiceBrand key={product._id} product={product} ></ServiceBrand>)
         }
         </div>
         <Mall></Mall>
         <div>
       
         </div>
        </div>
    );
};

export default Home;