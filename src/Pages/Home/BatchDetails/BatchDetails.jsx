import img1 from '../../../assets/images/icon/images.png'
import img2 from '../../../assets/images/icon/images (1).jpg'
import img3 from '../../../assets/images/icon/images (1).png'
import img4 from '../../../assets/images/icon/images.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const BatchDetails = () => {
    useEffect(()=>{
        AOS.init({duration:2000,delay:5000})
    },[])
    return (
        <div className='w-10/12 mx-auto mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>

            <div className="card bg-white shadow-xl"
            data-aos="zoom-in-up" 
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="2000"
            >
            <figure className="px-10 pt-10">
                <img   src={img1} alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-orange-500">40000+ Student</h2>
                <p className='text-xl font-extrabold text-slate-600'>Aleady Trained</p>
                
            </div>
            </div>

            <div className="card bg-white shadow-xl"
            data-aos="zoom-in-up" 
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="2000"
            
            >
            <figure className="px-10 pt-10">
                <img   src={img2} alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-orange-500">19+ Batch</h2>
                <p className='text-xl font-extrabold text-slate-600'>Already Launched</p>
                
            </div>
            </div>

            <div className="card bg-white shadow-xl"
             data-aos="zoom-in-up" 
             data-aos-offset="200"
             data-aos-delay="1000"
             data-aos-duration="2000"
            
            >
            <figure className="px-10 pt-10">
                <img   src={img3} alt="Shoes" className="rounded-xl h-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-orange-500">90% + Success</h2>
                <p className='text-xl font-extrabold text-slate-600'>Within the Course</p>
                
            </div>
            </div>

            <div className="card bg-white shadow-xl"
             data-aos="zoom-in-up" 
             data-aos-offset="200"
             data-aos-delay="1000"
             data-aos-duration="2000"
            
            >
            <figure className="px-10 pt-10">
                <img   src={img4} alt="Shoes" className="rounded-xl h-24 hover:scale-[1.09] duration-500" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold text-orange-500">40000+ Student</h2>
                <p className='text-xl font-extrabold text-slate-600'>Youtube Students</p>
                
            </div>
            </div>

            </div>
        </div>
    );
};

export default BatchDetails;