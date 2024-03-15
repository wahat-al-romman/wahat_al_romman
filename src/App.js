import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import SideBar from "./components/sidebar/SideBar";
// import Loader from './components/loader/Loader';
import "./style.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import NotFound from "./pages/notfound/NotFound";
import Landing from "./components/landing/Landing";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [menuOpen, openMenu] = useState(false)
  const [menuClose, closeMenu] = useState(false)

  const Layout = () => {
    return (
      <div className={`relative ${darkMode ? "theme-dark dark" : "theme-light"} overflow-x-hidden`}>
        <Landing/>
        <Navbar openMenu={openMenu} menuOpen={menuOpen} closeMenu={closeMenu} menuClose={menuClose} />
        <SideBar openMenu={openMenu} menuOpen={menuOpen} closeMenu={closeMenu} menuClose={menuClose} />
        <div className="md:hidden bg-white dark:bg-zinc-900 h-24"></div>
        <div className={`w-screen overflow-hidden ${menuOpen ? 'brightness-50' : ''}`}>
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;