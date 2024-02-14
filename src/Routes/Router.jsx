import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main"
import Home from "../Pages/Homes/Home/Home";
import About_Us from "../Pages/About_Us/About_Us";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Components/Auth/SignUp";
import SignIn from "../Components/Auth/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/about_Us",
        element:<About_Us/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      }
    ]
  }
]);
