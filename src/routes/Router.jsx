import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import OurFleet from "../Pages/ourFleet/OurFleet";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"our-fleet",
        element:<OurFleet/>
      }
    ],
  },
]);
