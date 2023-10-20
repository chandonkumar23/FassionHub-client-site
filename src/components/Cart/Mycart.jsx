import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";



const Mycart = () => {

        const LoadcartProducts = useLoaderData()
        const [cartProducts , setCartProducts] = useState(LoadcartProducts);
      


    return (
        <div className="grid lg:grid-cols-2 w-3/4 mx-auto gap-5 p-8">
              {
         
            cartProducts.map(product=><CartItem key={product._id} product={product} cartProducts={cartProducts} setCartProducts={setCartProducts} ></CartItem>)
            }
        </div>
    );
};

export default Mycart;