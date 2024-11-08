import React, { useEffect } from 'react'
import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import SineMotion from '../3D/SineMotion'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  const navigate = useNavigate();

  const mouseOverFunc = (e) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let iterations = 0;
    const originalText = e.target.dataset.value.split(" ");
    
    const interval = setInterval(() => {
      e.target.innerText = originalText.map((word, wordIndex) => 
        word.split("").map((letter, letterIndex) => {
          if (letterIndex < iterations) {
            return word[letterIndex];
          }
          return letters[Math.floor(Math.random() * 26)];
        }).join("")
      ).join(" ");
  
      if (iterations >  10) clearInterval(interval);
      iterations+= 1/3;
    }, 50);
  };

  useEffect(() => {
    const headers = document.querySelectorAll(".myH1");
    setTimeout(() => {
      headers.forEach((header) => {
        mouseOverFunc({ target: header });
      });
    }, 3500);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".myH1", {
      opacity: 0,
      y: "20",
      stagger: 0.2,
      duration: 1,
    });

    tl.from("h3",{
      opacity: 0,
      y: "20",
      duration: 1,
    })

    tl.fromTo(".btn",{
      opacity: 0,
      y: "20",
    },{
      opacity: 10,
      y: 0,
      duration: 1,
    })
  }, []);

  return (
        <Suspense className='w-full h-full min-h-[100vh] flex items-center justify-center' fallback={null}>
            <Canvas className='relative bg-black  w-full object-contain h-full min-h-[100vh] opacity-80'>
            <ambientLight />
              <SineMotion  />
            </Canvas>
            <div className='absolute top-40 w-full  grid grid-cols-8 gap-3 items-center'>
                <h1 data-value="RISK EDGE"  onMouseOver={(e)=>{mouseOverFunc(e)}} className='myH1 col-span-6 mb-3 md:col-start-4 col-start-2 xl:text-7xl lg:text-6xl md:text-5xl text-2xl text-start font-semibold text-white'>RISK EDGE</h1>
                {/* <h1 data-value="PRIVATE LIMITED" onMouseOver={(e)=>{mouseOverFunc(e)}} className='myH1 col-span-6 mb-3 md:col-start-3 col-start-2 xl:text-7xl lg:text-6xl md:text-5xl text-2xl text-start font-semibold text-white'>PRIVATE LIMITED</h1> */}
                <h3 className='md:col-span-4 col-span-7 col-start-2 md:col-start-3 text-xs md:text-2xl'>Risk Edge is a leading Solution provider for Machine Learning & Risk Analytics, used by medium and large Energy & Commodity Trading Players</h3>
                <button onClick={() => {navigate('/about')}} className='btn col-span-5 md:col-span-2 md:col-start-4 col-start-2 text-center text-nowrap bg-cyan-600 hover:bg-transparent hover:border-4 hover:border-cyan-400 hover:scale-110 transition transform delay-10 hover:text-gray-200 md:text-lg text-sm px-8 py-2'>Learn More</button>
            </div>
        </Suspense>
  )
}

export default Hero
