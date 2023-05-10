import { Register } from "./components/LogRegForm/Register";
import { Login } from "./components/LogRegForm/Login";
import { Header } from "./components/Header/Header";
import { MainPage } from "./components/MainPage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/mainpage",
        element: <MainPage />,
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
