const ServiceBrand = ({product}) => {
    const {brand_name , brand_image} = product;
    return (
        <div className="  ">
          <div>
            <div>
                <img className="h-[100px] w-[100px]" src={brand_image} alt="" />
                <h2 className="text-2xl lg:text-3xl font-bold underline hover:text-red-600 ">{brand_name}</h2>
            </div>
          </div>
           
        </div>
    );
};

export default ServiceBrand;