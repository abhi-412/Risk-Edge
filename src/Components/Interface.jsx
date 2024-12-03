import React, { useEffect, useState } from 'react'
import icons from '../utils/icons';
import Footer from './Footer';
const Section = (props) => {
    const {children} = props;
    return (
        <section className='flex flex-col gap-5 p-8  relative justify-center items-start max-w-7xl w-screen min-h-screen mx-auto'>
    <Cursor />

            {children}
        </section>
    )
}

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

const Interface = () => {
  return (
    <div className='w-screen flex flex-col items-center '>
    <Section>
        <div className='main relative'>
            <div className=' flex flex-col gap-3 items-start justify-center max-w-2xl mx-auto'>
                <h1 data-value="RISK EDGE" className='myH1 bg-gradient-to-b from-[#e44141] to-[#4f2af3] bg-clip-text text-transparent mb-0 xl:text-7xl lg:text-6xl md:text-5xl text-2xl font-semibold'>RISK EDGE</h1>
                <h3 className='px-6 text-xs md:text-2xl'>Risk Edge is a leading Solution provider for Machine Learning & Risk Analytics, used by medium and large Energy & Commodity Trading Players</h3>
                <button id='mainBtn'  className='btn col-span-3 text-center text-nowrap bg-gray-400 hover:bg-transparent hover:border-4 hover:border-gray-950 hover:scale-110 transition transform delay-10 hover:text-gray-200 md:text-lg text-sm px-8 py-2 mt-1'>Learn More</button>
            </div>
        </div>
    </Section>

    <Section>
                  
    <section className='  w-full flex flex-col gap-24 justify-start  py-24'>
                <div id='section2'   className="max-w-2xl flex  flex-col items-center gap-8 p-2 justify-center">
                        <h1 className='h1'>What We Do?</h1>
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
                        
                    </div>
                </div>
                

                
            </section>
    </Section>
    <Section>
        <h1>Plans</h1>
    </Section>

    <Section>
        <h1>Cards</h1>
    </Section>
    
    
    </div>
  )
}

export default Interface
