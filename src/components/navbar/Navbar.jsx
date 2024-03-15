import NightMode from "@mui/icons-material/DarkModeRounded";
import LightMode from "@mui/icons-material/LightModeRounded";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ToTopIcon from '@mui/icons-material/ExpandLessRounded';
// import PowerIcon from "@mui/icons-material/PowerSettingsNewOutlined";
// import AccountIcon from '@mui/icons-material/PermIdentityOutlined';
// import HomeIcon from "@mui/icons-material/HomeOutlined";
// import EmailIcon from "@mui/icons-material/EmailOutlined";
// import CloseIcon from "@mui/icons-material/CloseRounded";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
// import ReqIcon from '@mui/icons-material/PendingActions';
// import NotificationsIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import './navbar.css'
const Navbar = ({ openMenu, menuOpen, closeMenu }) => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState();

  const [searchText, setSearchText] = useState("");
  const [err, setErr] = useState(null);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const gotoRequests = () => {
    navigate("/requests");
    window.location.reload();
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleChange = async (e) => {
    if (e.target.value) {
      setSearchText(e.target.value);

    }
    else {
      setData(null);
      setSearchText(undefined);
    }
    setLoading(false);
  };

  const searchRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const refDiv = document.getElementById('refDiv');
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    if (refDiv) {
      const rect = refDiv.getBoundingClientRect();
      setWidth(rect.width);
      setLeft(rect.left);
    }

    setScrolling(false)

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setResultOpen(false);
      }
    };
    const handleScroll = () => {
      const scrlTop = document.documentElement.scrollTop;
      setScrollTop(scrlTop)
      setScrolling(true)
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
      <div className={`navbar fixed flex items-center justify-between top-0 w-screen h-24 px-5 bg-white dark:bg-zinc-900 dark:to-gray-800 dark:text-white z-998 ${!(scrollTop > 50) && !menuOpen ? 'md:bg-opacity-70 md:dark:bg-opacity-50' : 'bg-opacity-100 dark:bg-opacity-100'} overflow-hidden no-scrollbar`}>
        <Link to="/" className="no-underline flex gap-3 items-center">
          <img className="w-12 h-12 md:w-14 md:h-14 object-cover" src="/logoIcon.png" alt="Wahat Al Romman" />
          <div className="logo flex flex-col items-left justify-center">
            <span className="text-2xl xs:text-3xl md:text-3xl font-anton text-zinc-900 dark:text-zinc-200 ">WAHAT AL ROMMAN</span>
            <span className="text-xxs md:text-xs dark:text-zinc-200">FOOD STUFF TRADING LLC</span>
          </div>
        </Link>

        {/* 
      <div id="refDiv" ref={searchRef} className="search flex items-center border border-border1 dark:border-dborder1 rounded-full sm:rounded-md px-1.5 py-1 gap-2.5"
        onFocus={() => setResultOpen(true)} >
        <SearchIcon />
        <input
          className="bg-transparent flex border-none w-36 xs:w-36 sm:w-64 text-xs sm:text-sm font-light focus:outline-none focus:ring-0 p-0"
          type="text"
          name="searchbar"
          value={searchText}
          autoComplete="off"
          onChange={handleChange} placeholder="Search..." />
        <div className={`results absolute ${resultOpen ? "animate-openD" : "hidden"} flex-col gap-0.5 sm:gap-2 items-center justify-start z-998 px-0 pt-2.5 pb-5 overflow-scroll no-scrollbar overflow-x-auto top-20 max-h-[40vh] sm:max-h-[60vh] min-h-[4vh] rounded-lg bg-bgTrans border-2 border-border1 dark:border-dborder1 text-white text-xs sm:text-sm`} style={{ left: left, width: width }} >
          <div className="close flex w-11/12 text-zinc-300 items-center text-xs justify-between">
            <span className="text-xxs sm:text-xs">{data && searchText && data.length + " results"} </span>
            <div className="transition ease-in hover:rotate-90 duration-100">
              <CloseIcon style={{ fontSize: 'medium' }} onClick={() => { setResultOpen(false) }} />
            </div>
          </div>
          {searchText ? data ? data.map((result) =>
            <div className={`result flex items-center justify-between w-11/12 p-1 sm:p-4 rounded-full sm:rounded-xl ${result.type === 'faculty' ? 'bg-bg4' : 'bg-dbgGrey'}`} key={result.id} onClick={() => gotoProf(result.username)}>
              <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" src={"/profile/" + result.profilePic} alt="" />
              <div className="usr items-center justify-around w-1/2 overflow-hidden">
                <p className="name overflow-hidden text-zinc-300 ">{result.username}</p>
                <p className="fulname hidden sm:block text-xs font-light text-zinc-400">{result.fullname}</p>
              </div>
              <p className="type text-[10px] text-zinc-400 hidden sm:block">{result.type}</p>
              <ArrowForwardIcon className=" scale-75 justify-self-end text-zinc-400" />
            </div>) : loading ? 'Loading' : error : `Search users`}
        </div>
      </div> */}
        <div className="flex items-center gap-5">
          <SearchIcon />
          <div className="hidden xs:block cursor-pointer">
            {darkMode ? (
              <LightMode className='transition ease-in hover:scale-110 duration-200' onClick={toggle} />
            ) : (
              <NightMode className='transition ease-in hover:scale-110 duration-200' onClick={toggle} />
            )}
          </div>
          <div onClick={() => { if (menuOpen) { openMenu(false); closeMenu(true) } else { openMenu(true); closeMenu(false) } }} className="nav flex lg:hidden text-black dark:text-white cursor-pointer">
            <svg className='h-full' stroke={darkMode ? "white" : "black"}>
              <use xlinkHref="#menu" className={`line1 ${menuOpen && 'line1after'}`} />
              <use xlinkHref="#menu" className={`line2 ${menuOpen && 'line2after'}`} />
            </svg>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56" id="menu">
              <path d="M48.33,45.6H18a14.17,14.17,0,0,1,0-28.34H78.86a17.37,17.37,0,0,1,0,34.74H42.33l-21-21.26L47.75,4" />
            </symbol>
          </svg>
        </div>
      </div>
      <button onClick={scrollToTop} className={`fixed bottom-7 right-7 z-997 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center ${(scrollTop > 50) && scrolling && !menuOpen ? ' animate-falldown5' : scrolling && !menuOpen ? 'animate-fallup5' : 'opacity-0'}`}>
      <ToTopIcon fontSize={"large"}/>
      </button>
    </>
  );
};

export default Navbar;
