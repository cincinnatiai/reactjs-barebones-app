import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import { createBrowserRouter } from "react-router-dom";
import { LazyFeaturedPage } from "./lazyLoadedComponents";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/featured",
        element: <LazyFeaturedPage />,
      },
    ],
  },
]);

export default browserRouter;
