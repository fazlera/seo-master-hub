import BatchDetails from "./BatchDetails/BatchDetails";
import Banner from "./Header/Banner/Banner";
import MarketPlace from "./MarketPlace/MarketPlace";
import Mentor from "./Mentor/Mentor";
import MyCourse from "./MyCourse/MyCourse";
import StudentFeedback from "./StudentFeedback/StudentFeedback";
import TimeManage from "./TimeManage/TimeManage";

const Home = () => {
    return (
        <div>

            <div className="bg-green-100">
            <Banner></Banner>
            </div>
            <TimeManage></TimeManage>
            <BatchDetails></BatchDetails>
            <MyCourse></MyCourse>
            <StudentFeedback></StudentFeedback>
            <MarketPlace></MarketPlace>
            <Mentor></Mentor>
            
        </div>
    );
};

export default Home;