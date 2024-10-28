import React from 'react'
import Section from '../Components/Section'
import Hero from '../Components/Hero'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Home = () => {

    
  return (
    // <Section className={"relative"}>
    // </Section>
    <>
    <Parallax pages={2}>
        <ParallaxLayer offset={0} factor={1} speed={1}>
            <section  className='flex w-full h-full flex-col items-center justify-center'>
                <div className='relative h-screen w-full'>
                    <Hero />
                </div>
            </section>

        </ParallaxLayer>

        <ParallaxLayer offset={0.9999} speed={1} factor={2}>
            <section className='bg-black text-gray-300 w-full flex flex-col gap-5 h-full py-12 px-5'>
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
        </ParallaxLayer>

        {/* <ParallaxLayer>

        </ParallaxLayer> */}
    </Parallax>
    

    
    </>
  )
}

export default Home
