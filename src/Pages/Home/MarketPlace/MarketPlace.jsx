import Marquee from "react-fast-marquee";
import fiverr  from '../../../assets/images/icon/fiverr-removebg-preview.png'
import upwork  from '../../../assets/images/icon/upwork-removebg-preview.png'
import pph  from '../../../assets/images/icon/pph-removebg-preview.png'
import freeLancer  from '../../../assets/images/icon/freelancer-removebg-preview.png'
import guru  from '../../../assets/images/icon/download__1_-removebg-preview.png'
import linkedin  from '../../../assets/images/icon/linkedin-removebg-preview.png'
const MarketPlace = () => {
    return (
        <div className="bg-slate-200 py-10">
            <h1 className="text-center text-2xl md:text-6xl font-bold p-10 text-green-700">টার্গেটেট মার্কেট সমূহ</h1>

            <div >
            <Marquee speed={150}>
                <div className="grid grid-flow-col space-x-20 ">

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col ml-20">
                <img className="h-20" src={fiverr} alt="" />
                <h1 className="text-green-950">fiverr</h1>
                </div>

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col">
                <img className="h-14" src={upwork} alt="" />
                <h1 className="text-green-950">upwork</h1>
                </div>

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col">
                <img className="h-20" src={pph} alt="" />
                <h1 className="text-green-950">people per our</h1>
                </div>

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col">
                <img className="h-20" src={freeLancer} alt="" />
                <h1 className="text-green-950">freelancer.com</h1>
                </div>

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col">
                <img className="h-20" src={guru} alt="" />
                <h1 className="text-green-950">guru.com</h1>
                </div>

                <div className="px-20 py-14 text-4xl font-bold uppercase bg-slate-300 flex items-center justify-center flex-col ">
                <img className="h-20" src={linkedin} alt="" />
                <h1 className="text-green-950">LinkedIn</h1>
                </div>

                </div>
                
            </Marquee>
            </div>
        </div>
    );
};

export default MarketPlace;