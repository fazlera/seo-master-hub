import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="bg-green-100">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;