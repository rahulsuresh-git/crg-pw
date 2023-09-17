import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./components/Root/Root";
import AppTheme from "./extras/theme";
import "./index.css";
import Conference from "./pages/Conference/Conference";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//     },
//     {
//         path: "/conference",
//         element: <Conference />,
//     },
// ]);

root.render(
    <React.StrictMode>
        <ChakraProvider theme={AppTheme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Root />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/conference" element={<Conference />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
