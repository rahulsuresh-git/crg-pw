import React from "react";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import Header from "../Header/Header";

export default function Root({ children }) {
    useScrollToTop();
    return (
        <div>
            <Header />
            <div className="pt-14">
                <Outlet />
            </div>
        </div>
    );
}
