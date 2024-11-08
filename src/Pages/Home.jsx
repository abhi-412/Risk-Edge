import React from 'react'
import Hero from '../Components/Hero'
import icons from '../utils/icons'
import Footer from '../Components/Footer'
import images from '../utils/images'
import ServiceCard from '../Components/ServiceCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'


const Home = ({pageOneRef, pageTwoRef, pageThreeRef}) => {

    const handleMouseMove = (e) => {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let x = e.pageX - card.offsetLeft;
            let y = e.pageY - card.offsetTop;   

            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");

        });
    };

    // const pages = window.innerWidth >= 1024 ? 3.7 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 5.2 : window.innerWidth < 768 && window.innerWidth >= 580 ? 4.6 : window.innerWidth < 580 && window.innerWidth >= 368 ? 3.8 : 5.2
    // const page1offset = window.innerWidth >= 1024 ? 1.99 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 2.1 : window.innerWidth < 768 && window.innerWidth >= 580 ? 2 : window.innerWidth < 580 && window.innerWidth >= 368 ? 2 : 2.7
    // const pageOffset2 = window.innerWidth >= 1024 ? 3.3 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 4.8 : window.innerWidth < 768 && window.innerWidth >= 580 ? 4.2 : window.innerWidth < 580 && window.innerWidth >= 368 ? 3 : 4.8
    
    // const factor1 = window.innerWidth >= 1024 ? 2.7 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 2.999 : window.innerWidth < 768 && window.innerWidth >= 580 ? 3.6 : window.innerWidth < 580 && window.innerWidth >= 368 ? 4 : 5.3
    // const factor2 = window.innerWidth >= 1024 ? 2.3 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 3.4 : window.innerWidth < 768 && window.innerWidth >= 580 ? 2.7 : window.innerWidth < 580 && window.innerWidth >= 368 ? 2 : 5.3
   
    const services = [
        // {id:1,title:"Consulting & Training",
        //     description:"Our Consulting practice designs and implements solutions related to Predictive Analytics, Risk Management, Software Development.  Our Training vertical caters to custom requirements in Blockchain, Machine Learning and Risk Analytics."
        //     ,color:"yellow-400", img:images.prod1Img
        // },
        {id:2,title:"Apps to Solve Specific Problems",
            description:"Risk Edge’s Predictive Analytics Apps allow you to solve a specific set of problems. These apps are generally very light, are built using the latest technologies."
            ,color:"green-400", img:images.prod1Img
        },
        {id:3,title:"Advanced Analytics on Commodity Data",
            description:"MarketEdge is an AI driven web based solution that allows you to build advanced analytics on top of your global commodity and energy data."
            ,color:"blue-400", img:images.specificApp
        },
        {id:4,title:"Energy & Commodity Risk Management Software",
            description:"RiskEdge Software is a VaR (Value at Risk) based Commodity Risk Management System that provides Deeper Insights and Control on your business."
            ,color:"blue",img:images.domino
        },
        {id:5,title:"Plan Edge",
            description:"Plan Edge is a web-based Planning & Analysis Solution that uses AI to give users instantaneous insights throughout the year.",
            color:"blue",img:images.planEdge
        },
        {id:6,title:"Anomaly Detection",description:"Journal Entry Anomaly Detection Solution enables Internal Audit teams to use AI to detect old and emerging patterns in journal entries and flag those that deviate from a normal behavior."
            ,color:"blue",img:images.anomalyDetection
        },
        {id:7,title:"Predict Edge",
            description:"Predict Edge is a web-based solution that allows you to relate price and fundamental data using AI and forecast prices with greater accuracy."
            ,color:"blue",img:images.predictEdge,
        },

    ]

    gsap.registerPlugin(ScrollTrigger) 

  useGSAP(()=>{
    gsap.fromTo(".sec-1",{
        y:"50",
    },{
        y:0,
        duration: 1.5,
        // delay: 0.5,
        stagger:0.2,
        scrollTrigger:{
        trigger:"#page2",
        
        scroller:"body",
        scrub:4
        }
    }
    )

    gsap.fromTo(".sec-1 p",{
        y:"50",
    },{
        y:0,
        duration: 1.5,
        // delay: 0.5,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#page2",
            
            scroller:"body",
            // start:"top 50%",
            // scrub:4
            }
    }
    )

    gsap.fromTo(".sec-1 img",{
        y:"10",
    },{
        y:0,
        duration: 1.5,
        // delay: 1,
        repeat:-1,
        yoyo:true,
        scrollTrigger:{
            trigger:"#page2",
            
            scroller:"body",
            }
    }
    )

    gsap.from(".box div",{
        y:300,
        duration: 1,
        delay: 0,
        stagger:0.2,
        scrollTrigger:{
            trigger:".box",
            
            // scroller:"body",
            // start:"top 50%",
            // scrub:2
        }
    })
  },[scrollY])


  return (
    // <Section className={"relative"}>
    // </Section>
    <main className='relative w-full h-full'>
    {/* <Parallax pages={pages}>
        <ParallaxLayer   offset={0} factor={1} speed={1}> */}
            <section ref={pageOneRef}  className=' flex w-full h-full flex-col items-center  justify-center'>
                <div className='relative min-h-screen bg-black w-full'>
                    <Hero />
                </div>
            </section>

        {/* </ParallaxLayer>

        <ParallaxLayer  className='bg-white' offset={0.9999} speed={1.5} factor={factor1}> */}
           
           <section   className='text-gray-900   w-full flex flex-col gap-24  py-24'>
                <div className="max-w-6xl mx-auto flex  flex-col items-center gap-8 p-2 justify-center">
                        <h1 className='h1'>What We Do?</h1>
                        {/* <h2 className='h2 font-semibold'>Webentwicklung aus der Region Zug</h2> */}
                        <p className='tap-highlight-color body-1'>
                        Risk Edge was founded in 2013, to fill a desperate need for scalable and configurable Analytics Solutions for Commodities and Energy industry. The Industry needed solutions that were truly built for their problems, used latest technologies to deliver massive & complex computational results fast. Risk Edge has done pioneering work in solving problems using Machine Learning and AI. By using latest advancements in software architecture and hardware, Risk Edge delivers solutions that enable decision making with high precision levels at blazing speed for its clients. 
                        </p>
                </div>
                <div id='page2' className='grid md:grid-cols-2 grid-cols-1 md:p-12 p-0 gap-12'>
                    <div className='col-span-1 sec-1 md:gap-10 md:px-12 px-3 space-y-12'>
                        <a href='/predictive-analytics-apps' className='flex flex-col gap-5 items-start justify-center'>
                            <img src={icons.computer} alt="computer" />
                            <h4 className="h5 font-semibold">Machine Learning</h4>
                            <p className="body-2">Risk Edge’s “Predictive Engine” is built specifically for Commodity & Energy businesses to help you understand hidden patterns, risks, and price trends so businesses can be understood as a whole, and not just in parts! The in-built models give you a simple, never-before view of your data!</p>
                        </a>
                        <a href='/market-edge' className=' flex flex-col gap-5 items-start justify-center'>
                            <img src={icons.building} alt="" />
                            <h4 className="h5 font-semibold">Market Edge</h4>
                            <p className="body-2">Market Edge is an AI-driven, web-based solution to apply analytics to price data of Commodities and Energy. With Machine Learning based forecasting, advanced visualizations and loads of technical analysis indicators and their finger-tips, Market Edge gives both Traders and Risk Managers an edge over many others in the market.</p>
                        </a>
                        {/* <div className='flex flex-col items-start justify-center'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div> */}
                    </div>
                    <div className='col-span-1 sec-1  md:gap-10 space-y-12 md:px-12 px-3'>
                        <a href='/var-edge' className='flex flex-col items-start justify-center gap-5'>
                            <img src={icons.stack} alt="" />
                            <h4 className="h5 font-semibold">VaR Edge</h4>
                            <p className="body-2">RiskEdge does valuation & risk (Value-at-Risk, Expected Shortfall) calculations for all your physical and derivative positions and across counterparties. Its’ Powerful Engine delivers accurate results fast, even with computation intensive methods like Monte-Carlo.</p>
                        </a>
                        <a href="/plan-edge" className='flex flex-col items-start justify-center gap-5'>
                            <img src={icons.computer} alt="" />
                            <h4 className="h5 font-semibold">Plan Edge</h4>
                            <p className="body-2">PLAN EDGE is an AI powered, Digital FP&A platform that provides instantaneous insights throughout the year with cognitive, machine learning capabilities and predictive analysis on past, present and future performances It allows CFOs to connect their planning exercise with people across divisions The solution contributes directly to better planning, and more agile decision making across the board.</p>
                        </a>
                        {/* <div className='flex flex-col items-start justify-center gap-5'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div> */}
                    </div>
                </div>
                {/* <div className='w-full  flex items-center justify-center'>
                    <div className='relative group'>
                    <div className='absolute group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -inset-0.5 bg-gradient-to-r blur from-pink-600 to-purple-600 opacity-75 rounded-lg'></div>

                        <button className='px-8 py-4 bg-black leading-none relative rounded-lg'>

                            <div className='flex flex-wrap space-x-4 divide-x divide-gray-600'>
                                <span className='pr-4 text-gray-200 group-hover:text-white transition text-nowrap text-xs md:text-base duration-200'>Go to our Portfolio</span>
                                <span className='pl-8 text-blue-600 group-hover:text-white transition text-nowrap duration-1000 text-xs md:text-base group-hover:duration-200'>Click Here</span>
                            </div>
                        </button>
                    </div>
                </div> */}

                
            </section>
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer className='bg-white text-black' offset={page1offset} factor={factor2} speed={0.5}> */}
            <section id='page3' className={'flex flex-col items-center justify-center gap-12 py-12'}>
                <div className='max-w-6xl text-black   mx-auto  gap-5 flex flex-col items-center justify-center'>
                    <h1 className='h2 text-center'>Software Products</h1>
                    <p className='body-1 text-center'>Risk Edge has several software solutions and platforms for delivering custom-designed and powerful Machine Learning & Risk Analytics solution.
                         Designed by a team of domain experts, we help companies predict variables like Yield, Demand & Supply, Defaults, Breakdowns,
                         Risks and Prices, using Machine Learning Algorithms. Risk Edge also has one of the world’s largest free, online Derivative Pricing Libraries, and a Tweet Mining Engine.</p>
                </div>
            <div className='w-full lg:max-w-6xl h-[590px] md:h-full overflow-x-scroll xl:overflow-clip hide-scrollbar px-4 py-2 relative'> 
            <div className='w-fit box flex items-center justify-center flex-nowrap  xl:flex-wrap gap-6'>
               {
                services.map((service, index) => {
                    return (
                        <ServiceCard key={service.id} {...service} handleMouseMove={handleMouseMove} />
                    )
                })
               }
                
            </div>
            </div>

            {/* <div className='relative w-full'> */}
                {/* <div className="relative md:w-3/4 w-11/12 z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 md:left-20 left-5 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img 
                            className="w-full h-full object-cover md:object-right" 
                            width="800" 
                            alt="Smartest AI" 
                            height="730" 
                            src={aiHuman}
                        />
                    </div>
                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className="h4 mb-4">Our Smart AI</h4>
                        <p className="body-2 mb-[3rem] text-white">
                            Unlock unlocks the potential of AI-powered applications
                        </p>
                        <ul className="body-2">
                            <li className="flex items-start py-4 border-t border-n-6">
                                <img 
                                    width="24" 
                                    height="24" 
                                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                />
                                <p className="ml-4">Photo generating</p>
                            </li>
                            <li className="flex items-start py-4 border-t border-n-6">
                                <img 
                                    width="24" 
                                    height="24" 
                                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                />
                                <p className="ml-4">Photo enhance</p>
                            </li>
                            <li className="flex items-start py-4 border-t border-n-6">
                                <img 
                                    width="24" 
                                    height="24" 
                                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                />
                                <p className="ml-4">Seamless Integration</p>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 text-base">
                        <img 
                            className="w-5 h-5 mr-4" 
                            src="/assets/loading-CllQEGx_.png" 
                            alt="Loading" 
                        />
                        AI is generating
                    </div>
                </div> */}
            {/* </div> */}


            </section>
        {/* </ParallaxLayer>

        <ParallaxLayer offset={pageOffset2} factor={0.4} > */}
        <Footer />
        {/* </ParallaxLayer>
    </Parallax> */}
    
    {/* // <Footer /> */}
    

    
    </main>
  )
}

export default Home
