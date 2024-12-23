import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import images from '../utils/images'
import icons from '../utils/icons'
import Breadcrumb from '../Components/BreadCrumb'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const About = () => {


    useGSAP(()=>{
    const tl = gsap.timeline();

        tl.from(".logoImg",{
            y:10,
            repeat:-1,
            yoyo:true,
            duration:1.5,
            delay:0.5,
        })

    },[scroll])

  return (
    <>
                <section className='w-full dark:bg-black dark:text-gray-100 bg-white  flex flex-col justify-center pb-10 text-black items-start  gap-4'>
                    <div className='w-full md:px-12 px-3 mt-24 bg-white dark:bg-black dark:text-white text-black flex flex-col justify-center items-start gap-5 p-5'>
                        <h1 className='h2 '>The Company</h1>
                        <Breadcrumb bg={"black"} items={[{ label: 'Home', href: '/', isCurrent: false }, { label: 'About', href: '/about', isCurrent: true }]} />
                    </div>
                <div className="container my-8 mx-auto px-4">
                    <div className="flex flex-wrap">
                        {/* Main Content */}
                        <div className="w-full xl:w-2/3">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-lg font-semibold">Your Analytics Partner</p>
                            <h3 className="h2 font-bold  ">Risk Edge Solutions</h3>
                            <img
                            decoding="async"
                            src={images.minMin}
                            alt="drive10"
                            className="my-4 md:w-2/3 w-full h-auto"
                            />
                            <p className='body-2'>
                            Risk Edge was founded in 2013, to fill a desperate need for scalable and configurable Analytics Solutions
                            for Commodities and Energy industry. The Industry needed solutions that were truly built for their
                            problems, used latest technologies to deliver massive & complex computational results fast.
                            </p>

                            <h2 className="h3 font-semibold mt-6 mb-4 text-gray-800 dark:text-gray-200">About Us</h2>
                            <h2 className="h4 font-bold text-gray-800 dark:text-gray-200 ">What We Do</h2>
                            <p className='body-2'>
                            Today, as a young & innovative company, Risk Edge offers advanced solutions for Machine Learning and
                            Analytics needs of medium and large enterprises. With several large clients under its belt and hands-on
                            experience with real datasets, Risk Edge’s Machine Learning & Analytics practice enables{' '}
                            <a href="/big-data-analytics/" className="text-blue-600 hover:underline">
                                predictive analytics
                            </a>{' '}
                            capabilities for its clients. Over the past few years, our Machine Learning algorithms have solved various
                            problems like predicting yield, demand – supply, fraud detection, prices, machine failures, robo-advisors,
                            etc, for our clients.
                            </p>
                            <img
                            fetchPriority="high"
                            decoding="async"
                            src={images.pexels}
                            alt=""
                            className="my-4 md:w-2/3 w-full"
                            />

                            <p className='body-2'>
                            Risk Edge also provides Risk Management{' '}
                            <a href="/risk-edge-software/" className="text-blue-600 hover:underline">
                                Software
                            </a>{' '}
                            solution for quantifying Market and Credit Risks using models that are specifically adapted to the
                            requirements of Energy and Commodity Trading companies. We also have a{' '}
                            <a href="/risk-consulting/" className="text-blue-600 hover:underline">
                                Risk Consulting
                            </a>{' '}
                            Practice, through which we deliver bespoke modelling assignments for large corporate and Implement Risk
                            Policies & Outsourced Risk Services for small to medium sized companies.
                            </p>

                            <h2 className="h4 font-bold text-gray-800 dark:text-gray-200  mt-6">What Sets Us Apart</h2>
                            <img
                            decoding="async"
                            title="16"
                            src={icons.building}
                            alt="img"
                            className="my-4 w-16 h-16 logoImg"
                            />
                            <h5 className="h5 font-semibold text-gray-800 dark:text-gray-200 ">We value Simplicity</h5>
                            <p className='body-2'>
                            Our web-based solutions are easy to use and can be integrated with any existing in-house / 3rd party
                            systems or even with excels and can be deployed either on-premise or on Cloud. Most of our solutions use
                            in-memory computations with real-time simulations and interactive visualizations.
                            </p>
                            <img
                            decoding="async"
                            title="17"
                            src={icons.stack}
                            alt="img"
                            className="my-4 w-16 h-16 logoImg"
                            />
                            <h5 className="h5 font-semibold text-gray-800 dark:text-gray-200 ">We dig Innovation</h5>
                            <p className='body-2'>
                            Risk Edge has done pioneering work in solving problems using Machine Learning and AI for Energy and
                            Commodity Trading Industry. By using latest advancements in software architecture and hardware, Risk Edge
                            delivers solutions that enable decision making with high precision levels at blazing speed for its
                            clients.
                            </p>
                            <img
                            decoding="async"
                            title="16"
                            src={icons.building}
                            alt="img"
                            className="my-4 w-16 h-16 logoImg"
                            />
                            <h5 className="h5 font-semibold text-gray-800 dark:text-gray-200 ">Our “Edge” is Transparency and Trust</h5>
                            <p className='body-2'>
                            We are social, and very open about what we think of and how we do Predictive Analytics and Risk Analytics.
                            Risk Edge’s Research, Blog, are all made with extreme care by our Research team and are available for free
                            to everyone from the industry. We already have hundreds of subscribers on our list made up of who’s-who of
                            the industry – people who have subscribed to our research and are regular readers too.
                            </p>
                            <img
                            decoding="async"
                            src={images.contactUS}
                            alt=""
                            className="my-4 w-full md:w-2/3"
                            />
                            <h2 className="h3 font-bold text-gray-800 dark:text-gray-200  mt-6">Get in Touch with Us</h2>
                            <p className='body-2'>
                            To know how Risk Edge can help you with Data / Risk Analytics, build AI Solutions to solve your problems,
                            or to find a newer, better way of solving many of your strategic / operational issues, write to our
                            business development team with your requirements on{' '}
                            <a href="mailto:info@riskedgesolutions.com" className="text-blue-600 hover:underline">
                                info@riskedgesolutions.com
                            </a>
                            , or directly to our CEO on{' '}
                            <a href="mailto:nitin@riskedgesolutions.com" className="text-blue-600 hover:underline">
                                nitin@riskedgesolutions.com
                            </a>
                            . We respond to every personalized email!
                            </p>
                            
                        </div>
                        </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
                        <aside id="secondary" className="primary-sidebar widget-area">
                            <h2 className="sr-only">Asides</h2>
                            <div id="nav_menu-1" className="widget widget_nav_menu"></div>
                        </aside>
                        </div>
                    </div>
                    </div>
                </section>

        </>
  )
}

export default About
