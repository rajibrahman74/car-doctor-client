import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
{
  path: "/",
  element: <Main />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ],
},
]);

export default router;