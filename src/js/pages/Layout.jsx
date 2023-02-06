import React from "react";
import { Outlet } from "react-router-dom";
import Mynavbar from "../component/Mynavbar.jsx";

const Layout = () => {
    return (
        <>
            <Mynavbar />
            <Outlet />
        </>
    );
};

export default Layout;
