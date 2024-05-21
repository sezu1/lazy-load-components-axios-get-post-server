import React from 'react';
import {Outlet} from "react-router-dom";
import {NavBar} from "../navBar/NavBar";
import {Suspense} from "react";


function Layout(props) {
    return (
        <Suspense fallback={<div> Loading...</div>}>
            <NavBar/>
            <Outlet/>
        </Suspense>
    );
}

export default Layout;