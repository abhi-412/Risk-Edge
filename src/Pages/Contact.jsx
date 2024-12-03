import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa6'
import ContactForm from '../Components/ContactForm'
import Breadcrumb from '../Components/BreadCrumb'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
    <div className='bg-white dark:bg-gray-950 dark:text-white flex flex-col gap-6 justify-center  items-center pt-24 pb-12 text-black '>
        <div className='w-full h-36  lg:px-12 px-3 flex justify-center items-start p-5 flex-col'>
        <h1 className='h2 mb-8'>Contact Us</h1>
            <Breadcrumb bg={"black"} items={[{ label: 'Home', href: '/', isCurrent: false }, { label: 'Contact', href: '/contact', isCurrent: true }]} />
        </div>

      <div className='grid grid-cols-2 w-full gap-10 lg:p-12 p-5'>
      <div className='md:col-span-1 col-span-2 bg-gray-100 dark:bg-gray-900 py-5'>
        <h1 className='h4 text-center'> Send us a Message</h1>
               <ContactForm />
        </div>
        <div className='md:col-span-1 col-span-2 py-5  flex flex-col bg-gray-100 dark:bg-gray-900 px-4 items-center justify-start gap-6'>
            <h4 className='h4'>Reach out to Us</h4>

            <div className='flex flex-col gap-3 items-start'>
            <div className=''>
                <h5 className='h6'>India</h5>
                <p className='text-sm md:text-base'>201, NSIC Business Park,
                    ECIL, Hyderabad, Telangana, India
                    <br />PIN – 500062</p>
            </div>

            <div className=' flex flex-col gap-3'>
                <h5 className='h6'>United States</h5>
                <p className='text-sm md:text-base'>53 West Jackson Boulevard 
                    Suite #337 
                    Chicago, IL <br />60604-3687
                </p>
                <a className='hover:text-gray-500 hover:underline text-sm md:text-base' href="tel:+13128484445">phone (M): +1 312-848-4445</a>
            </div>

            <div className=''>
                <h5 className='h6'>United Kingdom</h5>
                <p className='md:text-base text-sm'>76, Frenbrook Drive,
                Harrow, London, HA27ED</p>
                
            </div>

            <div className='flex flex-col gap-1'>
                <h4 className='h6'>Phone Support</h4>

                <a className='hover:text-gray-500 hover:underline text-sm md:text-base' href="tel:+919000117640">+91-90001-17640</a>
            </div>

            <div className='flex flex-col gap-1'>
                <h4 className='h6'>Mail Us</h4>

                <a href="mailto:info@riskedgesolutions.com" className='hover:text-gray-500 hover:underline text-sm md:text-base'>info@riskedgesolutions.com</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h4 className='h6'>Follow Us</h4>
                <div className='flex gap-4'>
                <a href="https://x.com/RiskEdgeSol?mx=2" className="hover:text-gray-600 hover:underline flex gap-3 text-sm md:text-base items-center"><BsTwitterX className='md:text-xl text-base' />Twitter</a>
                <a href="https://www.linkedin.com/company/risk-edge-solutions/" className="hover:text-gray-600 hover:underline flex gap-3 text-sm md:text-base items-center"><FaLinkedin className='md:text-xl text-base' />LinkedIn</a>
                </div>
            </div>
            </div>
        </div>

        
      </div>

    </div>

    </>
  )
}

export default Contact
