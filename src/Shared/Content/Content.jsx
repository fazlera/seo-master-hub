import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Content = () => {
    useEffect(()=>{
        AOS.init({duration:500,delay:1000})
      },[])
    return (

        <div className="flex items-center justify-center h-screen bg-green-400"
        data-aos="fade-down" 
        data-aos-offset="200"
        data-aos-delay="500"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        
        >
            <h1 className="text-6xl font-bold uppercase text-red-900">Content not uploaded right now</h1>
        </div>
    );
};

export default Content;