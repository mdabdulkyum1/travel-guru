
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import News from "../pages/News";
import Login from "../pages/Login/Login";
import SignUpForm from "../pages/SignupForm/SignupForm";


const router = createBrowserRouter([
     {
        path: "/",
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "booking",
                element: <Booking></Booking>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUpForm></SignUpForm>
            },
            {
                path: "news",
                element: <News></News>
            }

        ]
     }
    ]);

export default router;