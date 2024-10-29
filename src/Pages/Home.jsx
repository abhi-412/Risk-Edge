import React from 'react'
import Section from '../Components/Section'
import Hero from '../Components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import aiHuman from "../assets/aiRobot.jpg"

const Home = () => {

    const handleMouseMove = (e) => {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let x = e.pageX - card.offsetLeft;
            let y = e.pageY - card.offsetTop;   

            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");

        });
    };

    const pageOffset2 = window.innerWidth >= 1024 ? 1.8 : window.innerWidth >= 768 && window.innerWidth < 1024 ? 1.3 : window.innerWidth < 768 && window.innerWidth > 368 ? 2 : 2.3
    
  return (
    // <Section className={"relative"}>
    // </Section>
    <>
    <Parallax pages={6}>
        <ParallaxLayer offset={0} factor={1} speed={1}>
            <section  className='flex w-full h-full flex-col items-center justify-center'>
                <div className='relative h-screen w-full'>
                    <Hero />
                </div>
            </section>

        </ParallaxLayer>

        <ParallaxLayer className='bg-black' offset={0.9999} speed={1} factor={3}>
           <Section>
           <section className='text-gray-300 w-full flex flex-col gap-5 h-full py-12 px-5'>
                <div className="max-w-6xl mx-auto flex  flex-col items-start gap-8 justify-center">
                        <h1 className='h1'>Digital Agentur aus Zug für Coding, Design und Headless-Softwarelösungen</h1>
                        <h2 className='h2 font-semibold'>Webentwicklung aus der Region Zug</h2>
                        <p className='tap-highlight-color body-1'>
                        Die Websites, die wir bauen, sind darauf ausgerichtet, Ihre Geschäftsziele, Ihr Wachstum und Ihren Online-Erfolg zu maximieren. Gleichzeitig vereinfachen und automatisieren unsere digitalen Produkte Prozesse, verbessern sowohl das Kunden- sowie Mitarbeitererlebnis und eröffnen neue Geschäftsmöglichkeiten. Zusätzlich helfen wir Ihnen bei der nahtlosen Integration und Vernetzung Ihrer Systeme. Dank unserem modernen Softwarestack und unseren innovativen Methoden bleiben wir stets auf dem neuesten Stand der Technik.
                        </p>
                </div>
                <div className='w-full  flex items-center justify-center flex-col md:p-12 p-4 gap-12'>
                    <div className='flex md:flex-row flex-col md:gap-10 gap-7'>
                        <div className='flex flex-col items-start justify-center'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                        <div className='flex flex-col items-start justify-center'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-10 gap-7 '>
                    <div className='flex flex-col items-start justify-center gap-5'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-5'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                        <div className='flex flex-col items-start justify-center gap-5'>
                        <h4 className="h5 font-semibold">Kostenloses Erstgespräch</h4>
                        <p className="body-1">Sie haben eine Idee? Lassen Sie uns in einem 30 minütigen Strategie-Gespräch zusammensitzen. Das ganze ist kostenlos und unverbindlich.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full  flex items-center justify-center'>
                    <div className='relative group'>
                    <div className='absolute group-hover:opacity-100 transition duration-1000 group-hover:duration-200 -inset-0.5 bg-gradient-to-r blur from-pink-600 to-purple-600 opacity-75 rounded-lg'></div>

                        <button className='px-8 py-4 bg-black leading-none relative rounded-lg'>

                            <div className='flex space-x-4 divide-x divide-gray-600'>
                                <span className='pr-4 text-gray-200 group-hover:text-white transition duration-200'>Go to our Portfolio</span>
                                <span className='pl-8 text-blue-600 group-hover:text-white transition duration-1000 group-hover:duration-200'>Click Here</span>
                            </div>
                        </button>
                    </div>
                </div>

                
            </section>
           </Section>
        </ParallaxLayer>

        <ParallaxLayer offset={pageOffset2} factor={2} speed={0.5}>
            <Section className={'bg-black flex flex-col items-center justify-center gap-12'}>
            <ul className='container  flex items-center justify-center flex-wrap gap-16'>
                <div onMouseMove={handleMouseMove} className="card shadow-md shadow-green-600 flex flex-col gap-2 items-start justify-center p-5 text-green-700 hover:text-white" style={{"--clr": "#0f0"}}>
                    <h1 className='h4 text-center'>Item-1</h1>
                    <h2 className='h6 '>Item-1 Tagline to be used.</h2>
                    <p className='body-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed amet expedita modi, sit culpa illo, minus cupiditate labore, corrupti quae doloribus nobis. Illo impedit cumque alias asperiores explicabo rem?</p>
                </div>

                <div onMouseMove={handleMouseMove} className="card shadow-md shadow-yellow-400 flex flex-col gap-2 items-start justify-center p-5 text-yellow-400 hover:text-white" style={{"--clr": "#ff0"}}>
                    <h1 className='h4 text-center'>Item-2</h1>
                    <h2 className='h6 '>Item-2 Tagline to be used.</h2> 
                    <p className='body-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed amet expedita modi, sit culpa illo, minus cupiditate labore, corrupti quae doloribus nobis. Illo impedit cumque alias asperiores explicabo rem?</p>
                </div>

                <div onMouseMove={handleMouseMove} className="card shadow-md shadow-purple-400 flex flex-col gap-2 items-start justify-center p-5 text-purple-400 hover:text-white" style={{"--clr": "#A020F0"}}>
                    <h1 className='h4 text-center'>Item-3</h1>
                    <h2 className='h6 '>Item-3 Tagline to be used.</h2> 
                    <p className='body-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed amet expedita modi, sit culpa illo, minus cupiditate labore, corrupti quae doloribus nobis. Illo impedit cumque alias asperiores explicabo rem?</p>
                </div>
                
            </ul>

            {/* <div className='relative w-full'> */}
                <div className="relative md:w-3/4 w-11/12 z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
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
                </div>
            {/* </div> */}

            </Section>
        </ParallaxLayer>
    </Parallax>
    

    
    </>
  )
}

export default Home
