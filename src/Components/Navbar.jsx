import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { IoHomeSharp, IoLogOut } from "react-icons/io5";
import { FaRegHeart,FaShoppingCart, FaHandHoldingHeart, FaStore, FaBlog, FaChevronDown } from "react-icons/fa";
import { BsBox } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import logo from '../utils/logo';





const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdown,setDropDown] = useState(false);


  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(isOpen);
  };


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDrop = ()=>{
    setDropDown(!dropdown)
  }






  return (
    <nav className="flex flex-col gap-3 w-full">
      <div 
      
      className="flex justify-between w-full bg-black border-gray-200 items-center  px-6 py-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo.footerLogo} className="w-32" alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
        </Link>
        <div className="flex md:order-2 md:hidden">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 me-1"
            onClick={toggleSidebar}
          >
            <AiOutlineMenu className="w-5 h-5" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
        
          className={`items-center  hidden w-full md:flex  md:order-1 ${sidebarOpen ? 'block' : 'hidden'}`}
          id="navbar-search"
        >
          
            <div  className='w-full flex flex-nowrap justify-end'>
                <div className='flex gap-12 text-gray-50  font-semibold'>
                      <NavLink className="flex gap-2 items-center justify-center mb-0" to="/">Home</NavLink>
                      <div className="relative h-full"
                      onMouseLeave={()=>{setIsOpen(false)}}
                      
                      >
                        <button
                          id="dropdownAvatarNameButton"
                          onMouseOver={()=>{setIsOpen(true)}}
                          className="flex items-center text-sm font-medium gap-4 text-white border-0"
                          type="button"
                          onClick={toggleDropdown}
                        >
                          <span className="sr-only">Open user menu</span>
                          <span className='text-gray-50 font-semibold text-base'>Solutions</span>
                          <FaChevronDown className="w-2.5 h-2.5 text-white"  />
                        </button>

                        {isOpen && (
                          <div
                            id="dropdownAvatarName"
                            className="absolute z-40 right-0 -left-10 top-6 pt-6  bg-black divide-y divide-gray-100  shadow w-64 "
                          >
                            
                            <ul
                              className="py-2 text-sm text-white flex flex-col gap-4"
                              aria-labelledby="dropdownAvatarNameButton"
                            >
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/predictive-analytics-apps"
                                  className="flex gap-2 items-center px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Machine Learning
                                </a>
                              </li>

                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/market-edge"
                                  className="flex gap-2 items-center px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Market Edge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/plan-edge"
                                  className="flex items-center gap-2 px-4 py-2 hover:translate-x-2 transition transform delay-50"
                                >
                                   PlanEdge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/var-edge"
                                  className="flex items-center gap-2 px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  VaR Edge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/credit-risk"
                                  className="flex items-center gap-2 px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Credit Risk
                                </a>
                              </li>
                            </ul>
                            <div className="py-2">
                              
                            </div>
                          </div>
                        )}
                      </div>
                      <NavLink className="flex gap-2 items-center " to="/about">About</NavLink>
                      <NavLink className="flex gap-2 items-center " to="/contact">Contact</NavLink>
                 
                  {/* <NavLink className="flex gap-2 items-center" to="/blogs"><FaBlog className='text-lg text-gray-50'/> Blogs</NavLink> */}
                  
                </div>

                
                
            </div>

        </div>
      </div>



      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 bg-black bg-opacity-50 z-40`} onClick={toggleSidebar}></div>
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} overflow-scroll md:hidden fixed inset-y-0 left-0 w-64 bg-black shadow-lg z-50 transform transition-transform duration-300 ease-in-out`}>
        <div className="p-3 relative text-gray-600">
        <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 absolute right-0 top-0 p-3"
            onClick={toggleSidebar}
          >
            <AiOutlineClose className='hover:text-gray-50 text-xl' />
            <span className="sr-only">Open main menu</span>
          </button>

          <div className="mb-">
            <Link className="text-gray-50 mb-3 border-0 font-semibold text-3xl" to="/">
            <img src={logo.footerLogo} className="w-24" alt="Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span> */}
            </Link>
          </div>
         
          <div className='flex flex-col gap-3'>
           
              
                    
                        <div className='flex flex-col gap-2 mb-3 mt-8'>
                            <h3 className='text-lg font-semibold text-gray-50'>Hey <span className='text-blue-700 italic'>Visitor</span></h3>
                            <p className='text-sm text-gray-500'>Welcome to <a href='/' className='text-gray-50 font-bold text-lg font-mono'>Risk Edge</a></p>
                            {/* <p className='text-sm'><a className='text-gray-50 font-bold' href="/login">Login</a> or <a className='text-gray-50 font-bold' href="/signup">Register</a> to access your account.</p> */}
                        </div>
                  
            
                <nav className="flex flex-col gap-2 text-sm  font-semibold text-gray-50">
                  <NavLink className="flex gap-3 items-center hover:bg-gray-400 px-3 rounded py-2 hover:translate-x-2 transition transform delay-50" to="/">Home</NavLink>
                      <button
                          id="dropdownAvatarNameButton"
                          onClick={()=>{setIsOpen(!isOpen)}}
                          className="flex items-center text-sm px-3 font-medium gap-4 text-white border-0"
                          type="button"
                        >
                          <span className="sr-only">Open user menu</span>
                          <span className='text-gray-50 font-semibold'>Solutions</span>
                          <FaChevronDown className="w-2.5 h-2.5 text-white"  />
                        </button>

                        {isOpen && (
                          <div
                            id="dropdownAvatarName"
                            className="ml-4 bg-black divide-y divide-gray-100  shadow w-64 "
                          >
                            
                            <ul
                              className="py-2 text-sm text-white flex flex-col gap-4"
                              aria-labelledby="dropdownAvatarNameButton"
                            >
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/predictive-analytics-apps"
                                  className="flex gap-2 items-center px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Machine Learning
                                </a>
                              </li>

                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/market-edge"
                                  className="flex gap-2 items-center px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Market Edge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/plan-edge"
                                  className="flex items-center gap-2 px-4 py-2 hover:translate-x-2 transition transform delay-50"
                                >
                                   PlanEdge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/var-edge"
                                  className="flex items-center gap-2 px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  VaR Edge
                                </a>
                              </li>
                              <li className='hover:bg-gray-400 hover:text-gray-800 '>
                                <a
                                  href="/credit-risk"
                                  className="flex items-center gap-2 px-4 py-2  hover:translate-x-2 transition transform delay-50"
                                >
                                  Credit Risk
                                </a>
                              </li>
                            </ul>
                            <div className="py-2">
                              
                            </div>
                          </div>
                        )}
                  <NavLink className="flex gap-3 items-center hover:bg-gray-400 px-3 rounded py-2 hover:translate-x-2 transition transform delay-50" to="/about">About</NavLink>
                  <NavLink className="flex gap-3 items-center hover:bg-gray-400 px-3 rounded py-2 hover:translate-x-2 transition transform delay-50" to="/contact">Contact</NavLink>
                  {/* <NavLink className="flex gap-3 items-center hover:bg-gray-200 px-3 rounded py-2" to="/contact"><BiSupport className='text-lg text-gray-50'/> Help & Support</NavLink> */}
                {/* {isLoggedIn && <button onClick={handleLogout} className="flex gap-3 hover:bg-gray-200 px-3 rounded py-2 items-center" to="/store"><IoLogOut className='text-xl text-gray-50'/>Logout</button> } */}
                </nav>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
