/* eslint-disable react/prop-types */


const Brands = ({findBrand }) => {
    const {price,name} = findBrand || {};

    return (
        <div>
            
                
                <p>{price}</p>
                <p>{name}</p>
            
        </div>
    );
};

export default Brands;