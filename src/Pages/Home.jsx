import React, { useEffect,useState, useRef, Suspense } from 'react'
import Hero from '../Components/Hero'
import icons from '../utils/icons'
import Footer from '../Components/Footer'
import images from '../utils/images'
import ServiceCard from '../Components/ServiceCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'
import { useLocation } from 'react-router-dom'
import aiHuman from '../assets/aiRobot.jpg'
import Marquee from "react-fast-marquee";
import { Canvas } from '@react-three/fiber'
import Robot from '../3D/Robot'
import { OrbitControls } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger) 


const Particle = () => {
    const [x, setX] = useState(Math.random() * window.innerWidth );
    const [y, setY] = useState(Math.random() * window.innerHeight);
    const [vx, setVx] = useState(Math.random() * 2 - 1);
    const [vy, setVy] = useState(Math.random() * 2 - 1);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setX(x + vx);
        setY(y + vy);
        if (x + vx > window.innerWidth -10 || x + vx < 0) setVx(-vx);
        if (y + vy > window.innerHeight || y + vy < 0) setVy(-vy);
      }, 16); // 60fps
      return () => clearInterval(intervalId);
    }, [x, y, vx, vy]);
  
    return (
      <div
        style={{
          position: 'absolute',
          top: y,
          left: x-20,
          width: '2px',
          height: '2px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
        }}
      />
    );
  };


  const Cursor = () => {
    const [particles, setParticles] = useState([]);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setParticles((prevParticles) => prevParticles.length > 100 ? prevParticles.slice(1) :  [...prevParticles, <Particle key={Math.random()} />]);
        // if () setParticles((prevParticles) => );
      }, 100); // 10 particles per second
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div>
        <div id="cursor" className="w-12 h-10 z-1 flex items-center justify-center fixed top-0 left-0 rounded-full" />
        {particles}
      </div>
    );
  };


const Home = ({setNavbarColor}) => {
   
    const location = useLocation();
  

  const [play,setPlay] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const section2Top = document.getElementById('section2').offsetTop;
          const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
    
          scrollPosition >= section2Top && location.pathname === "/" ? setNavbarColor("bg-white dark:bg-black dark:text-white text-black shadow-xl"): setNavbarColor("");
        }
    
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on mount
    
        return () => window.removeEventListener('scroll', handleScroll);
        
      }, [location.pathname, setNavbarColor]);
      

    const handleMouseMove = (e) => {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let x = e.pageX - card.offsetLeft;
            let y = e.pageY - card.offsetTop;   

            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");

        });
    };
    

      const handleMouseMove2 = (e) => {
        gsap.to("#cursor",{
            x: e.screenX ,
            y: e.screenY - 126,
            duration: 1,
            ease:"back.out"
        })
    }

    const clients = [
        {id:1, img:icons.mittal},
        {id:2, img:icons.essar},
        {id:3, img:icons.satoshi},
        {id:4, img:icons.china},
        {id:5, img:icons.greenko},
        {id:6, img:icons.simeDarby},
        {id:7, img:icons.masson},
    ]
    
   
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



  useGSAP(()=>{

    // const tl = gsap.timeline();

    gsap.fromTo(".link",{
        opacity:"0%",
    },{
        opacity:"100%",
        duration: 1,
        scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        }
    }
    )

    gsap.fromTo(".link a",{
        scale:"0.5",
    },{
        scale:1,
        duration:2.5,
        // delay:"0.5",
        ease: "elastic.out(1,0.1)",
        yoyo:true,
        // repeat:2,
        scrollTrigger:{
            trigger:".link",
            scroller:"body",
            }
    }
    )

    gsap.fromTo(".link img",{
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

    gsap.from(".sec-1 div",{
        y:300,
        duration: 1,
        delay: 0,
        stagger:0.2,
        scrollTrigger:{
            trigger:".box",
            
            scroller:"body",
            // start:"top 50%",
            // scrub:2
        }
    })
  },[])


  return (
    // <Section className={"relative"}>
    // </Section>
    <main onMouseMove={handleMouseMove2} className="main dark:bg-black">
       {/* <div id='cursor' className='w-20 h-16 z-1 flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 blur-xl fixed top-0 left-0 rounded-full'></div> */}
  {/* <Cursor /> */}
    {/* <Parallax pages={pages}>
        <ParallaxLayer   offset={0} factor={1} speed={1}> */}
            <section  className='relative flex w-full h-full flex-col items-center bg-black justify-center'>
                <div id='secA' className='absolute min-h-screen h-full w-full opacity-40'>
                    
                </div>
                <Hero />
            </section>

        {/* </ParallaxLayer>

        <ParallaxLayer  className='bg-white' offset={0.9999} speed={1.5} factor={factor1}> */}
           
           <section id='section2'  className='text-gray-900 dark:bg-gray-950 dark:text-gray-100 w-full flex flex-col gap-24  py-24'>
                <div className="md:max-w-6xl max-w-md sm:max-w-xl mx-auto flex  flex-col items-center gap-8 p-2 justify-center">
                        <h1 className='h1'>What We Do?</h1>
                        <div className='w-full flex md:hidden justify-start md:my-12'>
                            <img src={images.smart} className='' alt="" />
                        </div>
                        <p className='tap-highlight-color body-1'>
                        Risk Edge was founded in 2013, to fill a desperate need for scalable and configurable Analytics Solutions for Commodities and Energy industry. The Industry needed solutions that were truly built for their problems, used latest technologies to deliver massive & complex computational results fast. Risk Edge has done pioneering work in solving problems using Machine Learning and AI. By using latest advancements in software architecture and hardware, Risk Edge delivers solutions that enable decision making with high precision levels at blazing speed for its clients. 
                        </p>
                </div>
                <div id='page2' className='flex flex-wrap justify-center max-w-7xl mx-auto md:gap-12 gap-6  p-4'>
                        <div  className=' cursor-pointer hover:scale-105 transition duration-200 link w-fit bg-white dark:bg-black dark:shadow-gray-700 flex flex-col gap-5 shadow-gray-400/50 border items-start justify-center shadow-xl md:p-12 p-8'>
                            <img src={icons.computer} alt="computer" />
                            <h4 className="h5 font-semibold">Machine Learning</h4>
                            <p className="body-2 max-w-md">Risk Edge’s “Predictive Engine” is built specifically for Commodity & Energy businesses to help you understand hidden patterns, risks, and price trends so businesses can be understood as a whole, and not just in parts! The in-built models give you a simple, never-before view of your data!</p>
                            <a href='/predictive-analytics-apps' className='bg-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:border-white dark:text-black dark:hover:text-white dark:border-white border-2 border-black hover:text-black transition duration-200 font-semibold hover:border-2 text-white py-2 px-6'>Learn More</a>
                        </div>
                        <div  className='flex cursor-pointer hover:scale-105 transition duration-200 link w-fit  flex-col gap-5 bg-white dark:bg-black dark:shadow-gray-700 shadow-gray-400/50 border items-start justify-center shadow-xl md:p-12 p-8'>
                            <img src={icons.building} alt="" />
                            <h4 className="h5 font-semibold">Market Edge</h4>
                            <p className="body-2 max-w-md">Market Edge is an AI-driven, web-based solution to apply analytics to price data of Commodities and Energy. With Machine Learning based forecasting, advanced visualizations and loads of technical analysis indicators and their finger-tips, Market Edge gives both Traders and Risk Managers an edge over many others in the market.</p>
                            <a href='/market-edge' className='bg-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:border-white dark:text-black dark:hover:text-white dark:border-white border-2 border-black hover:text-black transition duration-200 font-semibold hover:border-2 text-white py-2 px-6'>Learn More</a>
                        </div>
                        <div  className='flex cursor-pointer hover:scale-105 transition duration-200 link w-fit flex-col gap-5 bg-white dark:bg-black dark:shadow-gray-700 shadow-gray-400/50 border items-start justify-center shadow-xl md:p-12 p-8'>
                            <img src={icons.stack} alt="" />
                            <h4 className="h5 font-semibold">VaR Edge</h4>
                            <p className="body-2 max-w-md">RiskEdge does valuation & risk (Value-at-Risk, Expected Shortfall) calculations for all your physical and derivative positions and across counterparties. Its’ Powerful Engine delivers accurate results fast, even with computation intensive methods like Monte-Carlo.</p>
                            <a href='/var-edge' className='bg-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:border-white dark:text-black dark:hover:text-white dark:border-white border-2 border-black hover:text-black transition duration-200 font-semibold hover:border-2 text-white py-2 px-6'>Learn More</a>
                        </div>
                        <div className='flex cursor-pointer hover:scale-105 transition duration-200 link w-fit flex-col gap-5 bg-white dark:bg-black dark:shadow-gray-700 shadow-gray-400/50 border items-start justify-center shadow-xl md:p-12 p-8'>
                            <img src={icons.computer} alt="" />
                            <h4 className="h5 font-semibold">Plan Edge</h4>
                            <p className="body-2 max-w-md">PLAN EDGE is an AI powered, Digital FP&A platform that provides instantaneous insights throughout the year with cognitive, machine learning capabilities and predictive analysis on past, present and future performances It allows CFOs to connect their planning exercise with people across divisions The solution contributes directly to better planning, and more agile decision making across the board.</p>
                            <a href="/plan-edge" className='bg-black hover:bg-white dark:bg-white dark:hover:bg-black dark:hover:border-white dark:text-black dark:hover:text-white dark:border-white border-2 border-black hover:text-black transition duration-200 font-semibold hover:border-2 text-white py-2 px-6'>Learn More</a>
                        </div>
                </div>


                
            </section>
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer className='bg-white text-black' offset={page1offset} factor={factor2} speed={0.5}> */}
            <section id='page3' className={'flex flex-col xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-xl text-black dark:text-gray-200  mx-auto  items-center justify-center gap-12 py-12'}>
                <div className=' gap-5 flex flex-col items-center justify-center'>
                    <h1 className='h2 text-center'>Software Products</h1>
                    <p className='body-1 text-center'>Risk Edge has several software solutions and platforms for delivering custom-designed and powerful Machine Learning & Risk Analytics solution.
                         Designed by a team of domain experts, we help companies predict variables like Yield, Demand & Supply, Defaults, Breakdowns,
                         Risks and Prices, using Machine Learning Algorithms. Risk Edge also has one of the world’s largest free, online Derivative Pricing Libraries, and a Tweet Mining Engine.</p>
                </div>
            <div className='w-full lg:max-w-6xl  h-fit min-h-[30rem] overflow-x-scroll hide-scrollbar px-4 py-2 relative'> 
            <div className='w-fit box flex items-center justify-center flex-nowrap   gap-6'>
               {
                services.map((service) => {
                    return (
                        <ServiceCard key={service.id} {...service} handleMouseMove={handleMouseMove} />
                    )
                })
               }
                
            </div>
            </div>
            </section>
        



                <section className='w-full  flex justify-center my-12 bg-gray-200 dark:bg-gray-950 py-20'>
                    <div className="relative bg-white dark:bg-black dark:text-gray-200 dark:border-gray-600 text-black md:w-3/4 w-11/12 z-1 flex items-center h-[39rem] my-5 p-8 border border-black rounded-3xl overflow-hidden lg:p-8 xl:h-[36rem] xl:w-8/12">
                            <div className="absolute top-20 md:left-0 left-5 w-full h-full pointer-events-none xl:w-6/12">
                                <Suspense className='relative w-full flex  items-center justify-center' fallback={null}>
                                    <div className='rounded-full absolute md:top-0 top-0 z-10 w-[400px] h-[500px]  right-0 opacity-40  blur-[180px] bg-gradient-to-b from-green-600 to-purple-700 bg-opacity-70'></div>
                                    <Canvas gl={{antialias: true}} dpr={[1, 2]} className={`w-full ${play ? "cursor-grab" : "cursor-default "} h-full`}>
                                    <ambientLight intensity={3} />
                                    <OrbitControls enableZoom={play} enablePan={play} enableRotate={play} />
                                        <Robot position={[0,-1,0.4]} scale={[1.8,1.8,1.8]} play={play}/>
                                    </Canvas>
                                </Suspense>
                            </div>
                            <div className="relative z-1 max-w-[24rem] ml-auto xl:pr-28 sm:pr-8 pr-0">
                                <h4 className="h4 mb-4 font-bold">Our Smart AI</h4>
                                <p className="body-2 mb-[2rem] pb-4 font-semibold border-black dark:border-white border-b">
                                    Unlock the potential of AI-powered applications
                                </p>
                                <ul className="body-2">
                                    <li className="flex items-start py-4 border-b border-black dark:border-white">
                                        <img 
                                            width="24" 
                                            height="24" 
                                            src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                        />
                                        <p className="ml-4 font-semibold">Photo generation</p>
                                    </li>
                                    <li className="flex items-start py-4 border-b border-black dark:border-white">
                                        <img 
                                            width="24" 
                                            height="24" 
                                            src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                        />
                                        <p className="ml-4 font-semibold">Photo enhancement</p>
                                    </li>
                                    <li className="flex items-start py-4 border-b border-black dark:border-white">
                                        <img 
                                            width="24" 
                                            height="24" 
                                            src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='24'%20height='24'%20rx='12'%20fill='%23AC6AFF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.8047%207.52925C18.0651%207.7896%2018.0651%208.21171%2017.8047%208.47206L10.4714%2015.8054C10.2111%2016.0657%209.78894%2016.0657%209.5286%2015.8054L6.19526%2012.4721C5.93491%2012.2117%205.93491%2011.7896%206.19526%2011.5292C6.45561%2011.2689%206.87772%2011.2689%207.13807%2011.5292L10%2014.3912L16.8619%207.52925C17.1223%207.2689%2017.5444%207.2689%2017.8047%207.52925Z'%20fill='%230E0C15'/%3e%3c/svg%3e" 
                                        />
                                        <p className="ml-4 font-semibold">Seamless Integration</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex items-center h-[3.5rem] px-6 text-black bg-white dark:bg-gray-900 dark:border-white dark:text-white rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-black border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2 text-base">
                                <button 
                                    onClick={()=>{setPlay(!play)}}
                                    className="" 
                                    alt="Loading" 
                                >{play===false ? "Click to play with the Model" : "Click to stop the animation"}</button>
                                
                            </div>
                        </div>    
                </section>     

                <section className='bg-white dark:bg-black dark:text-gray-200 px-8 py-20   w-full mt-10 pb-10'>
                    <div className='flex flex-col gap-5 max-w-7xl relative justify-center items-center mx-auto'>
                    <h1 className='h2'>Global Clients</h1>
                    <p className='body-1 mb-4 text-center max-w-5xl'>Risk Edge has worked with some of the most well known companies in the world and helped them solve problems of all sizes. Our clients have 
                        always been satisfied with us and our services and still remain with us to this day. Here are some of our recurring and most valuable clients. 
                    </p>
                    <Marquee 
                        className='bg-gray-100 shadow-md dark:bg-gray-900'
                    >
                    <div className='flex gap-16 p-6 '>
                        {clients.map((client) => (
                            <img key={client.id} className='object-contain' src={client.img} alt="" />
                        ))}
                    </div>

                    </Marquee>
                    </div>
                    
                </section> 


        {/* </ParallaxLayer>
    </Parallax> */}
    
    {/* // <Footer /> */}
    

    
    </main>
  )
}

export default Home
