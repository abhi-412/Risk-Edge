import React from 'react'
import Section from '../Components/Section'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    // <Section className={"relative"}>
    // </Section>
    <section  className='flex h-full flex-col items-center justify-center'>
       <div className='relative h-full w-full'>
       <Hero />
       </div>
        <div className=''>
          <h1 className='text-center text-3xl'>About</h1>
          <div className='lg:p-12 p-2'>
            <h2>Digital Agentur aus Zug für Coding, Design und Headless-Softwarelösungen</h2>
          </div>
        </div>
        
    </section>
  )
}

export default Home
