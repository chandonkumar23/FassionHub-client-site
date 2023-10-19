import swal from "sweetalert";

/* eslint-disable react/prop-types */
const DetailesCart = ({findProducts}) => {
    const {name,brand,rating,type,price,url,description} =  findProducts || {};


    const  handleAddCart= () =>{
        fetch('http://localhost:5000/addCart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(findProducts)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                swal("Product Added","","success");
            }
        })   

    }

    return (
        <div className="p-8 flex justify-between  mx-auto">
            <div className="flex items-center gap-8  rounded-lg ">
               <div>
               <img className="h-[300px] w-[400px]" src={url} alt="" />
               </div>
               <div className="">
                <h2 className="text-2xl font-bold">{description}</h2>
                <h2> price:${price}</h2>
                <p>Reting:{rating}</p>
                <p>Product brand:{brand}</p>
                <p>product name:{name}</p>
                <p>product type:{type}</p>
                <button onClick={handleAddCart} className="btn">Add to cart</button>
                <button  className="btn outline-1">update</button>

               </div>
               
            </div>
        </div>
    );
};

export default DetailesCart;