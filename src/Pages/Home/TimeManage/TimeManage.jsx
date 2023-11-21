

const TimeManage = () => {
    return (
        <div className="">
            <div className="w-10/12 mx-auto mb-20 ">
            <div className="">
            <div className="hero min-h-[500px] " style={{backgroundImage: 'url(https://i.ibb.co/XLptQ6b/banner.png)'}}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="text-white">
            <div className="">
            <h1 className="font-bold text-center text-5xl">পরবর্তী ব্যাচের সময় সূচি</h1>
            <div className="flex items-center flex-col md:flex-row justify-between mt-10  md:space-x-60 sm:space-y-10 md:space-y-0 px-5">
                <div className="font-bold space-y-5 text-2xl">
                    <h2>এনরোলমেন্ট শুরু: মার্চ ২৫, ২০২৩</h2>
                    <h2>এনরোলমেন্ট শেষ: মার্চ ৩০, ২০২৩</h2>
                </div>
                <div className="font-bold space-y-5 text-2xl">
                    <h2>ব্যাচের ওরিয়েন্টশন: মার্চ ২৫, ২০২৩</h2>
                    <h2>ক্লাস শুরু: ০১ এপ্রিল, ২০২৩</h2>
                </div>
                
            </div>

            <div className="flex justify-between items-center flex-col md:flex-row bg-blue-400 px-14 py-4 mt-20 rounded-full">
                <div>
                    <h1 className="md:text-xl font-bold">তুমি ২০ তম ব্যাচে এনরোল করতে আগ্রহি হলে,ওয়েবসাইটে রেজিস্ট্রেশন করে রাখো</h1>
                </div>
                <div>
                <button className='btn btn-outline border-0 border-b-4 border-orange-500 uppercase font-bold text-lg text-slate-950'>enroll now</button>
                </div>
            </div>
            </div>
            
        </div>
     </div>
            </div>
        </div>
        </div>
    );
};

export default TimeManage;