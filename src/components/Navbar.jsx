import React, { useEffect, useState } from 'react'
import logo from '../assets/rb_80699.png'
import { Link, useLocation } from 'react-router-dom';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [standing, setStanding] = useState();
  const pathName = useLocation();

  useEffect(() => {
    if (pathName.pathname == "/") {
      setStanding(1)
    }
    else if (pathName.pathname == "/foriegn") {
      setStanding(2)
    }
    else if (pathName.pathname == "/khmer") {
      setStanding(3)
    }
    else if (pathName.pathname == "/about") {
      setStanding(5)
    }
    else if (pathName.pathname == "/upload") {
      setStanding(6)
    }
    else {
      setStanding(0)
    }

  }, [pathName])


  return (
    <div>
      <div className='border-b-4 border-b-blue-400'>
        <img src="https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/full_logo.png" className='p-2 w-[70%] h-[5rem] max-md:w-full mx-auto ' alt="" />
      </div>
      <nav className="bg-blue-500 border-gray-200  border-b-4 border-b-blue-400 text-[20px] ">
        <div className="max-w-screen-xl bg-blue-500 flex flex-wrap items-center justify-between mx-auto">
          <Link to='/' className='md:w-full md:items-center md:justify-center md:flex '>
            <div
            className=" md:m-4 md:rounded-lg flex md:w-[50rem] relative justify-center items-center ">

             <img
             className='md:w-[30rem] max-md:w-[5rem] max-md:h-[3rem] max-md:mr-2 h-[8rem]'
             src="https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/web_logo.png" alt="" srcset="" />
            </div>

          </Link>



          <button onClick={() => setSidebar(true)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 text-pink-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden  md:mx-auto w-full items-center justify-center h-full md:block md:w-auto" id="navbar-default">
            <ul className="h-[3rem] mb-4 px-4 bg-blue-500 font-[800] uppercase flex flex-col border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
              <Link to="/">
                <li onClick={() => setStanding(1)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700  text-white ${standing == 1 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full duration-75 md:hover:bg-blue-700  rounded md:bg-transparent md:p-0 " aria-current="page">Home</p>
                </li>
              </Link>
              <Link to="/foriegn">
                <li onClick={() => setStanding(2)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-white ${standing == 2 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full  rounded duration-100 md:border-0 md:p-0 ">Foriegn Book</p>
                </li>
              </Link>
              <Link to="/khmer">
                <li onClick={() => setStanding(3)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-white ${standing == 3 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full  rounded duration-100 md:border-0 md:p-0 ">Khmer Book</p>
                </li>
              </Link>
              <Link to="/about">
                <li onClick={() => setStanding(5)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-white ${standing == 5 ? "bg-blue-700 text-white" : ""}`}>
                  <p className={`block h-full  rounded duration-100 md:border-0 md:p-0`}>ABOUT</p>
                </li>
              </Link>
              <Link to="/upload">
                <li onClick={() => setStanding(6)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-white ${standing == 6 ? "bg-blue-700 text-white" : ""}`}>
                  <p className={`block h-full  rounded duration-100 md:border-0 md:p-0`}>upload</p>
                </li>
              </Link>
              <Link to="/your-book">
                <li className={`p-2 rounded-full duration-100 h-full bg-violet-700 text-white ${standing == 6 ? "bg-blue-700 text-white" : ""}`}>
                  <p className={`block h-full  rounded duration-100 md:border-0 md:p-0 `}>Your Book</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div onClick={() => setSidebar(false)} className={`fixed w-full z-10 h-full top-0 ${sidebar == false && "hidden"}`}></div>

      <div className={`md:hidden border-l-4 p-4 border-l-blue-400 top-0 w-[25rem] h-full fixed z-40 bg-transparent  backdrop-blur-[20px] duration-300 left-[100%] ${sidebar ? "-translate-x-full" : "transalte-x-0"}`}>
        <div onClick={() => setSidebar(!sidebar)} className='p-8 flex gap-4 justify-start items-center'>

          <svg className="w-3 h-3 text-blue-700 font-[800] text-[30px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </div>
        <ul className="h-[3rem] font-medium flex flex-col rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
          <Link onClick={() => setSidebar(!sidebar)} to="/">
            <li onClick={() => setStanding(1)} className={` ${standing == 1 ? "bg-blue-700" : ""} p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center`}>
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full duration-75 hover:bg-blue-700  rounded md:bg-transparent md:p-0 " aria-current="page">Home</p>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/foriegn">
            <li onClick={() => setStanding(2)} className={` ${standing == 2 ? "bg-blue-700" : ""} p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center`}>
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">Foriegn Book</p>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/khmer">
            <li onClick={() => setStanding(3)} className={` ${standing == 3 ? "bg-blue-700" : ""} p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center`}>
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">Khmer Book</p>
            </li>
          </Link>

          <Link onClick={() => setSidebar(!sidebar)} to="/about">
            <li onClick={() => setStanding(5)} className={` ${standing == 5 ? "bg-blue-700" : ""} p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center`}>
              <a style={{ textShadow: "0px 0px 10px black" }} href="#" className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">ABOUT</a>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/upload">
            <li onClick={() => setStanding(6)} className={` ${standing == 6 ? "bg-blue-700" : ""} p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center`}>
              <a style={{ textShadow: "0px 0px 10px black" }} href="#" className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">UPLOAD</a>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/your-book">
            <li className={`p-2 rounded-full duration-100 h-full  text-white `}>
              <p className={`text-[25px] font-bold  block h-full  rounded-full mx-auto text-center duration-100 md:border-0 md:p-0 w-[10rem] bg-violet-700 p-2 `}>Your Book</p>
            </li>
          </Link>
        </ul>
      </div>

    </div>
  )
}

export default Navbar