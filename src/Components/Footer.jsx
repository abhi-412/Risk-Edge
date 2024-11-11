import React from 'react'
import logo from '../utils/logo'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=" bg-[#eff1fe] w-full  py-8 text-black">
  <div className="left-0 w-full ">
    <div className="flex flex-wrap justify-center items-center">
      {/* Logo and Description */}
      <div className="w-full lg:w-1/4 md:w-1/3 md:px-12 px-4 mb-8 md:mb-0">
        <div className="text-left">
          <img
            src={logo.RiskEdgeSVG}
            alt="Risk Edge Logo"
            width="160"
            className="mb-4"
          />
          <p className='body-2'>Risk Edge is a leading Solution provider for Machine Learning & Risk Analytics, used by medium and large Energy & Commodity Trading Players.</p>
        </div>
      </div>

      {/* Solutions Links */}
      <div className="w-1/2 md:w-1/4 flex justify-center px-4 mb-8 md:mb-0">
        <div className="text-left">
          <h4 className="h6 mt-0 text-lg font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 md:text-sm text-xs">
            <li><a href="/predictive-analytics-apps" className="hover:text-gray-300">Machine Learning</a></li>
            <li><a href="/market-edge/" className="hover:text-gray-300">Market Edge</a></li>
            <li><a href="/plan-edge/" className="hover:text-gray-300">Plan Edge</a></li>
            <li><a href="/var-edge" className="hover:text-gray-300">VaR Edge</a></li>
            <li><a href="/credit-risk/" className="hover:text-gray-300">Credit Risk</a></li>
            {/* <li><a href="/services/risk-consulting/" className="hover:text-gray-300">Consulting</a></li> */}
          </ul>
        </div>
      </div>

      {/* About Us Links */}
        <div className="w-1/2 md:w-1/4 flex justify-center md:text-sm text-xs px-4">
            <div className="text-left">
            <h4 className="h6 mt-0 text-lg font-semibold mb-4">About us</h4>
            <ul className="space-y-2">
                <li><a href="/about/" className="hover:text-gray-300">The Company</a></li>
                {/* <li><a href="/our-team/" className="hover:text-gray-300">Our Team</a></li>
                <li><a href="/client-case-studies/" className="hover:text-gray-300">Client Case Studies</a></li> */}
                <li><a href="/contact/" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
            </div>
        </div>

        <div className="w-full lg:w-1/4 md:w-1/3 flex justify-center text-sm  px-4 ">
            <div className="text-left">
            <h4 className="h6 mt-0 text-lg font-semibold mb-4">Reach Out to Us</h4>
            <ul className="space-y-3">
                    <div className='flex gap-3 items-start justify-center'>
                        <span><FaLocationDot className='text-sm md:text-lg' />
                        </span>
                        <p className='font-normal md:text-sm text-wrap text-xs'>201, NSIC Business Park, ECIL, Hyderabad, Telangana, India PIN – 500062</p>
                        
                    </div>
                <li><a href="tel:+91-90001-17640" className="hover:text-gray-300 hover:underline md:text-sm text-xs flex gap-2 items-center"><span><FaPhone className='md:text-lg text-base ' /></span> +91-90001-17640</a></li>
                <li><a href="mailto:info@riskedgesolutions.com" className="hover:text-gray-300 hover:underline md:text-sm text-xs  flex gap-2 items-center"> <IoIosMail className='md:text-2xl text-lg ' /> info@riskedgesolutions.com</a></li>
                <div className='flex flex-wrap gap-5 justify-start items-center'>
                   <h6 className='h6'>Our Socials: </h6>
                    <a href="https://x.com/RiskEdgeSol?mx=2" className="hover:text-gray-300"><BsTwitterX className='md:text-xl text-lg' /></a>
                    <a href="https://www.linkedin.com/company/risk-edge-solutions/" className="hover:text-gray-300"><FaLinkedin className='md:text-xl text-lg' /></a>
                </div>
            </ul>
            </div>
        </div>
    </div>
  </div>
</div>

  )
}

export default Footer
