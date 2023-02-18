import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
// import Topbar from '../Shared/Topbar/Topbar';

const Main = () => {
    return (
        <div>
            {/* <Topbar/> */}
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;