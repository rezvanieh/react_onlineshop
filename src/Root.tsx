import React from "react";
import Header from "./components/Header/Header";
import {Outlet} from "react-router-dom";

const RootLayout :React.FC = () =>{
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>

        </>
    )
}

export  default  RootLayout;