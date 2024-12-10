import React, { Suspense, useEffect, useRef, useState } from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa6'
import ContactForm from '../Components/ContactForm'
import Breadcrumb from '../Components/BreadCrumb'
import { Canvas } from '@react-three/fiber'
import SphereBot from '../3D/SphereBot'
import { OrbitControls, useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'

const Contact = () => {


    const [typing,setTyping] = useState(false)

//   useEffect(() => {
//     // Initialize the map
//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 37.7749, lng: -122.4194 }, // Default center (San Francisco)
//       zoom: 10,
//     });

//     // Add markers
//     const locations = [
//       { lat: 37.7749, lng: -122.4194, title: "San Francisco" },
//       { lat: 37.8044, lng: -122.2712, title: "Oakland" },
//       { lat: 37.6879, lng: -122.4702, title: "Daly City" },
//     ];

//     locations.forEach((location) => {
//       new window.google.maps.Marker({
//         position: { lat: location.lat, lng: location.lng },
//         map: map,
//         title: location.title,
//       });
//     });
//   }, []);


  return (
    <>
    <div className='bg-white dark:bg-gray-950 dark:text-white flex flex-col gap-6 justify-center  items-center pt-20 pb-12 text-black '>
        <div className='w-full h-36  lg:px-12 px-3 flex justify-center items-start lg:py-5 py-1 flex-col'>
        <h1 className='h2 md:mb-8 mb-4'>Contact Us</h1>
            <Breadcrumb bg={"black"} items={[{ label: 'Home', href: '/', isCurrent: false }, { label: 'Contact', href: '/contact', isCurrent: true }]} />
        </div>
        <div className='dark:bg-black bg-white w-full h-full flex items-center justify-center'>
        <iframe className='md:w-3/4 md:h-[500px] h-[300px] w-full' src="https://www.google.com/maps/d/u/0/embed?mid=1fv5ssfn4ov1n8UMtkxOnn4XFdKzvXi0&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>

        </div>
      <div className='w-full flex justify-center items-center gap-10 lg:p-12 p-5'>
      
        {/* <div className='md:col-span-1 col-span-2 py-5  flex flex-col bg-gray-100 dark:bg-gray-900 px-4 items-center justify-start gap-6'>
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
                <a className='hover:text-gray-500 dark:hover:text-gray-300 hover:underline text-sm md:text-base' href="tel:+13128484445">phone (M): +1 312-848-4445</a>
            </div>

            <div className=''>
                <h5 className='h6'>United Kingdom</h5>
                <p className='md:text-base text-sm'>76, Frenbrook Drive,
                Harrow, London, HA27ED</p>
                
            </div>

            <div className='flex flex-col gap-1'>
                <h4 className='h6'>Phone Support</h4>

                <a className='hover:text-gray-500 dark:hover:text-gray-300 hover:underline text-sm md:text-base' href="tel:+919000117640">+91-90001-17640</a>
            </div>

            <div className='flex flex-col gap-1'>
                <h4 className='h6'>Mail Us</h4>

                <a href="mailto:info@riskedgesolutions.com" className='hover:text-gray-500 dark:hover:text-gray-300 hover:underline text-sm md:text-base'>info@riskedgesolutions.com</a>
            </div>

            <div className='flex flex-col gap-2'>
                <h4 className='h6'>Follow Us</h4>
                <div className='flex gap-4'>
                <a href="https://x.com/RiskEdgeSol?mx=2" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline flex gap-3 text-sm md:text-base items-center"><BsTwitterX className='md:text-xl text-base' />Twitter</a>
                <a href="https://www.linkedin.com/company/risk-edge-solutions/" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline flex gap-3 text-sm md:text-base items-center"><FaLinkedin className='md:text-xl text-base' />LinkedIn</a>
                </div>
            </div>
            </div>

           

        </div> */}
        <div className='max-w-6xl mx-auto w-full flex flex-col gap-6 px-6 rounded-3xl bg-gray-300 shadow-xl dark:bg-gray-900 py-8'>
            <h1 className='h3 text-center'> Send us a Message</h1>
            <div className='flex flex-col md:flex-row md:gap-12 gap-4 justify-center items-center'>
                <div className='flex items-center gap-2'>
                    <h4 className='h7'>Mail Us: </h4>
                    <a href="mailto:info@riskedgesolutions.com" className='hover:text-gray-500 dark:hover:text-gray-300 hover:underline text-sm md:text-base'>info@riskedgesolutions.com</a>
                </div>

                <div className='flex items-center gap-2'>
                    <h4 className='h7'>Follow Us:</h4>
                    <div className='flex gap-4'>
                    <a href="https://x.com/RiskEdgeSol?mx=2" className="hover:text-[gray-600] dark:hover:text-gray-300 hover:underline flex gap-3 text-sm md:text-base items-center"><BsTwitterX className='md:text-xl text-base' />Twitter</a>
                    <a href="https://www.linkedin.com/company/risk-edge-solutions/" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline flex gap-3 text-sm md:text-base items-center"><FaLinkedin className='md:text-xl text-base' />LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 relative'>
                <Suspense className='md:col-span-1 col-span-2 relative w-full h-full flex  items-center justify-center' fallback={null}>
                    <div className='rounded-full absolute md:top-0 top-0 z-10 md:w-[400px] w-[150px] h-[150px] md:h-[600px]  left-10 opacity-40  blur-[180px]  bg-gradient-to-b from-gray-500 to-cyan-900 bg-opacity-70'></div>
                    <Canvas gl={{antialias: true}} dpr={[1, 2]} className={`w-full col-span-2 md:col-span-1 flex justify-center items-center h-full`}>
                        <directionalLight position={[1, 1, 1]} intensity={3} />
                        <ambientLight intensity={4} color={"black"} />
                        <pointLight position={[10, 5, 10]} intensity={1} />
                        <spotLight
                        position={[0, 0, 0]}
                        angle={0.15}
                        penumbra={1}
                        intensity={1}
                        />
                        <hemisphereLight
                        skyColor='white'
                        groundColor='black'
                        intensity={1}
                        />
                        <SphereBot scale={[0.05,0.05,0.05]} position={[0,-2,0]} typing={typing}  />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </Suspense>

              <div className='md:col-span-1 col-span-2  w-full h-full '>
              <ContactForm  typing={typing} setTyping={setTyping} />
              </div>

            </div>
        </div>
        
      </div>

    </div>

    </>
  )
}

export default Contact
