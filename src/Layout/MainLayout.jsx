import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Header/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="bg-green-100">
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;