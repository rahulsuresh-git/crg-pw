import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Root from "./components/Root/Root";
import AppTheme from "./extras/theme";
import "./index.css";
import Conference from "./pages/Conference/Conference";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ChakraProvider theme={AppTheme}>
            <HashRouter>
                <Routes>
                    <Route element={<Root />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/conference" element={<Conference />} />
                    </Route>
                </Routes>
            </HashRouter>
        </ChakraProvider>
    </React.StrictMode>
);
