import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Seo from "../Pages/Seo/Seo";
import Course from "../Pages/Course/Course";
import Syllabus from "../Pages/Syllabus/Syllabus";
import Complete from "../Pages/Complete/Complete";
import Wordpress from "../Pages/Wordpress/Wordpress";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error> ,
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/seo',
                element: <Seo></Seo>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/Syllabus',
                element: <Syllabus></Syllabus>
            },
            {
                path: '/complete',
                element: <Complete></Complete>
            },
            {
                path: '/wordpress',
                element: <Wordpress></Wordpress>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
]);

export default router;
