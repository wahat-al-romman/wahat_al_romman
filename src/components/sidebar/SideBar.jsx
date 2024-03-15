
import { LightMode } from "@mui/icons-material";
import NightMode from "@mui/icons-material/DarkModeRounded";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const SideBar = ({ menuOpen, menuClose }) => {
  
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div  className={`sidebar flex lg:hidden fixed right-0 top-24 w-full xs:w-3/4 md:w-1/2 h-[calc(100vh-96px)] bg-bg1 dark:bg-dbg1 dark:text-white overflow-scroll no-scrollbar z-998 ${menuOpen ? 'animate-openR' : menuClose?'animate-closeR':'translate-x-[100%]'}`}>
      <div className="w-full p-5">
        <div className="xs:hidden cursor-pointer">
          {darkMode ? (
            <LightMode className='transition ease-in hover:scale-110 duration-200' onClick={toggle} />
          ) : (
            <NightMode className='transition ease-in hover:scale-110 duration-200' onClick={toggle} />
          )}
        </div>
        <hr className='my-5 mx-0 border-none h-[0.4px] bg-border1 dark:bg-dborder1' />
       
        <Link to="/resources" >
          <div className="flex flex-col">
            <span className='text-xs py-2.5'>Find in PU</span>
            <div className="flex group opacity-90 hover:opacity-100 py-2.5 items-center gap-2.5" >
              <span className='text-sm transition ease-in group-hover:scale-110 group-hover:font-semibold duration-100'>Water Resources</span>
            </div>
            <div className="flex group opacity-90 hover:opacity-100 py-2.5 items-center gap-2.5" >
              <span className='text-sm transition ease-in group-hover:scale-110 group-hover:font-semibold duration-100'>Printers</span>
            </div>
            <div className="flex group opacity-90 hover:opacity-100 py-2.5 items-center gap-2.5" >
              <span className='text-sm transition ease-in group-hover:scale-110 group-hover:font-semibold duration-100'>Food Outlets</span>
            </div>
            <div className="flex group opacity-90 hover:opacity-100 py-2.5 items-center gap-2.5" >
              <span className='text-sm transition ease-in group-hover:scale-110 group-hover:font-semibold duration-100'>Toilets</span>
            </div>
          </div>
        </Link>
        <hr className='my-5 mx-0 border-none h-[0.4px] bg-border1 dark:bg-dborder1' />
      </div>
    </div>
  );
};
export default SideBar;
