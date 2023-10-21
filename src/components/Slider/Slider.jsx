import { useEffect, useState } from "react";
import SliderImg from "./SliderImg";

const Slider = () => {
    const  [slider,setSlider] = useState([]);

    useEffect(()=>{
        fetch('https://pratice-coffee-server-cqnmgkvz5-chandonkumar23.vercel.app/slider')
        .then(res=>res.json())
        .then(data=>setSlider(data))

    },[])
    
    return (
        <div>
          {
            slider.map(img => <SliderImg key={img._id} img={img}></SliderImg>)
          }
        </div>
    );
};

export default Slider;