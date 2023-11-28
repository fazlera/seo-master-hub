import { Link } from 'react-router-dom';
import hridoy from '../../../assets/images/hridoy/hridoy.png'
import facebook from '../../../assets/images/icon/facebbok-removebg-preview.png'
import twitter from '../../../assets/images/icon/twitter-removebg-preview.png'
import youtube from '../../../assets/images/icon/youtube-removebg-preview.png'
import website from '../../../assets/images/icon/website-removebg-preview.png'
const Mentor = () => {
    return (
        <div className='  bg-slate-200'>
            <div className="w-10/12 mx-auto py-20 mt-20">

                <h1 className="text-center font-bold text-green-500 text-2xl md:text-4xl">আমাদের মেন্টর পরিচিতি</h1>
                <div className='py-20'>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900">
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className=" leadi text-2xl text-green-600 font-bold">আমাদের মেন্টর হৃদয় </p>
                                        <p className="leadi text-lg font-semibold">হৃদয় বর্তমান সমইয়ে SEO জগতে সবচেয়ে জনপ্রিয় নাম তার স্টুডেন্টস এর ভালোবাসায়। তার SEO আর মার্কেটিং দক্ষতায় বর্তমানে লন্ডনের iTeck International এ মার্কেটিং হেড হিসেবে আছেন। যিনি আপওয়ার্কে টপ-রেটেড + এর পাশাপাশি ফাইভারে লেভেল টু । তিনি কানাডার ইন্টারন্যাশনাল এড এজেন্সিতে As a Marketing Head জব করছেন। SEO তে হয়তো তিনিই একমাত্র ব্যক্তি যার ২৫০০+ ওয়েবসাইটে কাজ করার অভিজ্ঞতা রয়েছে সব মিলিয়ে। </p>
                                    </div>
                                </div>

                                <div className="w-full space-y-5">
                                    <div className="grid h-20 flex-grow card bg-orange-300 uppercase hover:bg-green-600 hover:text-white rounded-box place-items-center text-xl font-bold ">on page</div>
                                    
                                    <div className="grid h-20 flex-grow card bg-orange-300 uppercase hover:bg-green-600 hover:text-white rounded-box place-items-center text-xl font-bold ">off page</div>
                                

                                    <div className="grid h-20 flex-grow card bg-orange-300 uppercase hover:bg-green-600 hover:text-white rounded-box place-items-center text-xl font-bold ">Technical seo</div>
                                    

                                    <div className="grid h-20 flex-grow card bg-orange-300 uppercase hover:bg-green-600 hover:text-white rounded-box place-items-center text-xl font-bold ">backLinks</div>
                                </div>

                        <div className='flex items-center justify-evenly py-10'>
                            <Link target='blank'  to={"https://www.facebook.com/hridoychowdhuryy"}  className='flex items-center justify-center flex-col'> <img className='h-14' src={facebook} alt="" /><span>Facebook</span>
                            </Link>

                            <Link  to={"https://www.facebook.com/hridoychowdhuryy"} target='blank'   className='flex items-center justify-center flex-col'> <img className='h-14' src={twitter} alt="" /><span>twitter</span>
                            </Link>

                            <Link  to={"https://www.youtube.com/@LearnFromTopRatedFreelancer"} target='blank'  className='flex items-center justify-center flex-col'> <img className='h-14' src={youtube} alt="" /><span>youtube</span>
                            </Link>

                            <Link  to={"https://www.learnfromtopratedfreelancer.com/"} target='blank'  className='flex items-center justify-center flex-col'> <img className='h-14' src={website} alt="" /><span>Website</span>
                            </Link>
                        </div>
                            </div>
                            
                            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
                                <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                                    <img src={hridoy} alt="" className=" dark:bg-gray-500 aspect-video w-[500px] h-[600px]" />
                                </div>
                            </div>

                        </div>

                        
                    </section>
                </div>

            </div>
         </div>
    );
};

export default Mentor;