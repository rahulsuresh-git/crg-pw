import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function Root({ children }) {
    return (
        <div>
            <Header />
            <div className="pt-14">
                <Outlet />
            </div>
        </div>
    );
}
