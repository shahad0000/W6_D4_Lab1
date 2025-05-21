import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router";

import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Footer from "../components/Footer";

function Layout() {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "courses", element: <Courses /> },
      ],
    },
  ]);

  const Router = () => {
    return <RouterProvider router={router} />
  }
  export default Router