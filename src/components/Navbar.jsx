import React, { useState } from 'react'
import logo from '../assets/rb_80699.png'
import { Link } from 'react-router-dom';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [standing, setStanding] = useState();

  return (
    <div>
      <div className='border-b-4 border-b-blue-400'>
        <img src="https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/full_logo.png" className='p-2 w-[70%] h-[5rem] mx-auto ' alt="" />
      </div>
      <nav className="bg-white border-gray-200  border-b-4 border-b-blue-400 text-[20px] ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <Link to='/'>
            <div className="flex relative items-center space-x-3 rtl:space-x-reverse p-4">
              <span style={{
                textShadow:
                  '-2px -1px 0 pink'
              }}
                className="self-center text-[30px] max-md:text-[18px] font-[800] whitespace-nowrap ">RPITST ELIB</span>
            </div>

          </Link>



          <button onClick={() => setSidebar(true)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden h-full md:block md:w-auto" id="navbar-default">
            <ul className="h-[3rem]  font-[800] uppercase flex flex-col border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <Link to="/">
                <li onClick={() => setStanding(1)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-gray-900 hover:text-white ${standing == 1 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full duration-75 md:hover:bg-blue-700  rounded md:bg-transparent md:p-0 " aria-current="page">Home</p>
                </li>
              </Link>
              <Link to="/foriegn">
                <li onClick={() => setStanding(2)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-gray-900 hover:text-white ${standing == 2 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full  rounded duration-100 md:border-0 md:p-0 ">Foriegn Book</p>
                </li>
              </Link>
              <Link to="/khmer">
                <li onClick={() => setStanding(3)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-gray-900 hover:text-white ${standing == 3 ? "bg-blue-700 text-white" : ""}`}>
                  <p className="block h-full  rounded duration-100 md:border-0 md:p-0 ">Khmer Book</p>
                </li>
              </Link>
              <Link to="/about">
                <li onClick={() => setStanding(5)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-gray-900 hover:text-white ${standing == 5 ? "bg-blue-700 text-white" : ""}`}>
                  <p className={`block h-full  rounded duration-100 md:border-0 md:p-0`}>ABOUT</p>
                </li>
              </Link>
              <Link to="/contact">
                <li onClick={() => setStanding(6)} className={`p-2 rounded-full duration-100 h-full md:hover:bg-blue-700 text-gray-900 hover:text-white ${standing == 6 ? "bg-blue-700 text-white" : ""}`}>
                  <p className={`block h-full  rounded duration-100 md:border-0 md:p-0 `}>CONTACT</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div onClick={() => setSidebar(false)} className={`fixed w-full z-10 h-full top-0 ${sidebar == false && "hidden"}`}></div>

      <div className={`md:hidden border-l-4 p-4 border-l-blue-400 top-0 w-[25rem] h-full fixed z-40 bg-transparent  backdrop-blur-[20px] duration-300 left-[100%] ${sidebar ? "-translate-x-full" : "transalte-x-0"}`}>
        <div onClick={() => setSidebar(!sidebar)} className='p-16 flex gap-4 justify-start items-center'>

          <svg className="w-3 h-3 text-blue-700 font-[800] text-[30px] " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </div>
        <ul className="h-[3rem]  font-medium flex flex-col rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
          <Link onClick={() => setSidebar(!sidebar)} to="/">
            <li className="p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center">
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full duration-75 hover:bg-blue-700  rounded md:bg-transparent md:p-0 " aria-current="page">Home</p>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/foriegn">
            <li className="p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center ">
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">Foriegn Book</p>
            </li>
          </Link>
          <Link onClick={() => setSidebar(!sidebar)} to="/khmer">
            <li className="p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center ">
              <p style={{ textShadow: "0px 0px 10px black" }} className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">Khmer Book</p>
            </li>
          </Link>

          <li className="p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center ">
            <a style={{ textShadow: "0px 0px 10px black" }} href="#" className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">ABOUT</a>
          </li>
          <li className="p-2 rounded-full duration-100 h-full hover:bg-blue-700 text-white hover:text-white text-center ">
            <a style={{ textShadow: "0px 0px 10px black" }} href="#" className="text-[25px] font-bold  block h-full  rounded duration-100 md:border-0 md:p-0 ">CONTACT</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar