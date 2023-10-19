/* eslint-disable react/prop-types */


const SliderImg = ({img}) => {
    const {sliderone,slidertow,sliderthree}= img
    return (
        <div className="">
       
       <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src={sliderone} className="w-full h-[400px]" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={slidertow} className="w-full h-[400px]"  />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img  src={sliderthree} className="w-full h-[400px]" />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
          
        
        </div>
    );
};

export default SliderImg;