/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const CartItem = ({product , cartProducts, setCartProducts}) => {
    const { _id, name,brand,type,price,url} =  product || {};

   const handleDelete =_id =>{
  console.log(_id)
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    //   Swal.fire(
    //     'Deleted!',
    //     'Your file has been deleted.',
    //     'success'
    //   )
    fetch (`http://localhost:5000/addCart/${_id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if (data.deletedCount > 0){
        Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )
      const remaining = cartProducts.filter(pro =>pro._id !== _id)
        setCartProducts(remaining);
        }
        
    })
    }
  })
   }


    return (
        <div>
            <div className="flex items-center gap-4  border-2 border-red-400 p-5 rounded-xl">
                <div>
                    <img className="h-[200px] w-[200px]" src={url} alt="" />
                </div>
                <div>
                    <h2 className="font-bold">{name}</h2>
                     <h2> product type: <span className="font-bold">{type}</span></h2>
                    <h2> brand: <span className="font-bold"> {brand}</span></h2>
                    <h2>price: <span className="font-bold"> ${price}</span></h2>
                   <button onClick={()=>handleDelete(_id)} className="btn">Delete</button>
                </div>
            </div>
        </div>
     
    );
};

export default CartItem;