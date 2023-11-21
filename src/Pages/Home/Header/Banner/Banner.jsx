import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';
import { Autoplay, Pagination, Navigation, EffectFade, } from 'swiper/modules';

import img1 from '../../../../assets/images/hridoy/hridoy.png'
// import img2 from '../../../../assets/images/hridoy/seoslide2.png'


const Banner = () => {
   
    return (
      <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          speed: 500,
        }}
        navigation={true}
        effect={'fade'}
        grabCursor={true}
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='w-10/12 mx-auto bg-green-200'>

        <div className=' bg-green-200 '>
        
        <div className='w-10/12 mx-auto'>
        <div className='flex items-center justify-center flex-col md:flex-row'>

        <div className='md:w-1/2 ml-10'>
        <h1 className='sm:text-xl md:text-5xl font-bold py-10 text-left'>Complete Advance SEO Course with <span className='text-orange-600 font-extrabold p-2 md:text-5xl'>Hridoy Chowdhury</span></h1>

        <h4 className='text-left flex-wrap'>একদম জিরো থেকে, কোন প্রকার পূর্ব অভিজ্ঞতা ছাড়াই একজন প্রফেশনাল এস ই ও (SEO Expert) হওয়ার জন্য যা যা লাগবে তার সবকিছুই সহজ করে বুঝিয়ে এবং শিখিয়ে দেওয়া হবে এই কোর্সে। ক্লাইন্ট রিয়েল কাজ দেখে বুঝে প্র্যাক্টিক্যাল হিসেবে নিজেই করতে পারবেন।</h4>

        <div className='flex justify-start py-10'>
          <button className='btn btn-outline border-0 border-b-4 border-orange-500 uppercase font-bold text-lg text-slate-950'>enroll now</button>
        </div>

        </div>

          <div  className='md:w-1/2'>
             <div className=''>
             <img style={{ width: '600px', height: 'auto' }} src={img1} alt="" />
             </div>
          </div>

        

        </div>

        
        

        </div>
       
        
        </div>
        
        </SwiperSlide>

        <SwiperSlide className='w-10/12 mx-auto bg-green-200'>

        <div className=' bg-green-200 '>
        
        <div className='w-10/12 mx-auto'>
        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className='md:w-1/2 ml-10'>
        <h1 className='sm:text-xl md:text-5xl font-bold py-10 text-left'>We will always be there for you <span className='text-orange-600 font-extrabold p-2 md:text-5xl'>Hridoy Chowdhury</span></h1>
       

        <h4 className='text-left flex-wrap'>০২ ঘন্টার মধ্যে কোর্স রিলেটেড সকল প্রশ্নের উত্তর দেয়ার জন্য ০৫ জন প্রফেশনাল SEO Expert এবং আমি প্রতিদিন একবার গুগল মিট এ স্ক্রিনশেয়ার করে সমস্যা সমাধান করতে পারবে।</h4>

        <div className='flex justify-start py-10'>
          <button className='btn btn-outline border-0 border-b-4 border-orange-500 uppercase font-bold text-lg text-slate-950'>enroll now</button>
        </div>
          </div>

          <div  className='md:w-1/2'>
             <div className=''>
             <img style={{ width: '600px', height: 'auto' }} src={img1} alt="" />
             </div>
          </div>
        </div>
        </div>
       
        
        </div>
        
        </SwiperSlide>


        <SwiperSlide className='w-10/12 mx-auto bg-green-200'>

        <div className=' bg-green-200'>
        
        <div className='w-10/12 mx-auto'>
        <div className='flex items-center justify-center flex-col md:flex-row'>
          <div className='md:w-1/2 ml-10'>
        <h1 className='sm:text-xl md:text-5xl font-bold py-10 text-left'>Start your dream today. Conquer the world <span className='text-orange-600 font-extrabold p-2 md:text-5xl'>Hridoy Chowdhury</span></h1>

        <h4 className='text-left flex-wrap'>সো, এক্ষুণি কোর্সে এনরোল করে ঝাঁপিয়ে পড়ো। তোমার লাইফের নতুন মিশন। হার্ডওয়ার্ক করবে তুমি। গাইডলাইন আর সাপোর্ট দিবো আমরা। ইনশাআল্লাহ, তুমি পারবে। বী কনফিডেন্ট ম্যান।</h4>

        <div className='flex justify-start py-10'>
          <button className='btn btn-outline border-0 border-b-4 border-orange-500 uppercase font-bold text-lg text-slate-950'>enroll now</button>
        </div>
          </div>

          <div  className='md:w-1/2'>
             <div className=''>
             <img style={{ width: '600px', height: 'auto' }} src={img1} alt="" />
             </div>
          </div>
        </div>
        </div>
       
        
        </div>
        
        </SwiperSlide>
        
       
      </Swiper>
    </>
    );
};

export default Banner;