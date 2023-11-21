import BatchDetails from "./BatchDetails/BatchDetails";
import Banner from "./Header/Banner/Banner";
import TimeManage from "./TimeManage/TimeManage";

const Home = () => {
    return (
        <div>

            <div className="bg-green-100">
            <Banner></Banner>
            </div>
            <TimeManage></TimeManage>
            <BatchDetails></BatchDetails>
            
        </div>
    );
};

export default Home;