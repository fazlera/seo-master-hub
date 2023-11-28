import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {

        const navLinks = 
        
        <>
        
        

            <li><NavLink to={'/'}>HOME</NavLink></li>
            <li><NavLink to={'/seo'}>SEO</NavLink></li>
            <li><NavLink to={'/course'}>COURSE MODULE</NavLink></li>
            <li><NavLink to={'/syllabus'}>SEO COURSE SYLLABUS</NavLink></li>
            <li><NavLink to={'/complete'}>COMPLETE SEO</NavLink></li>
            <li><NavLink to={'/wordpress'}>WORDPRESS</NavLink></li>
            <li><NavLink to={'/blog'}>SEO BLOG</NavLink></li>
        
        
        </>

    return (

        <div className="w-10/12 mx-auto">
        <div className="navbar  rounded-lg">

            <div className="navbar-start">

                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold hover:text-green-700">
                    {navLinks}

                </ul>
                </div>

                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <div>
                    <Logo></Logo>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  font-bold hover:text-green-700">

                    {navLinks}

                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
         </div>
        </div>
    );
};

export default Navbar;