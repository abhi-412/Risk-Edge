import React from 'react'
import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SineMotion from '../3D/SineMotion'
import Bot from '../3D/Bot'

const Hero = () => {
    // const cameraProps = {
	// 	fov: 75,
	// 	near: 1,
	// 	far: 2000,
	// 	position: [0, 0, 200]
	// }

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
  

  return (
        <Suspense className='w-full h-full min-h-[100vh] flex items-center justify-center' fallback={null}>
            <Canvas className='relative bg-black  w-fit object-contain h-full min-h-[100vh] opacity-80'>
            <ambientLight />
              <SineMotion  />
            </Canvas>
            <div className='absolute top-40 w-full  grid grid-cols-8 gap-4 place-items-center'>
                <h1 data-value="RISK EDGE SOLUTIONS"  onMouseOver={(e)=>{mouseOverFunc(e)}} className='myH1 col-span-6 mb-3 md:col-start-2 col-start-1 xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-start font-semibold text-white'>RISK EDGE SOLUTIONS</h1>
                <h1 data-value="PRIVATE LIMITED" onMouseOver={(e)=>{mouseOverFunc(e)}} className='myH1 col-span-6 mb-3 md:col-start-2 col-start-1 xl:text-7xl lg:text-6xl md:text-5xl text-3xl text-start font-semibold text-white'>PRIVATE LIMITED</h1>
                <h3 className='md:col-span-4 col-span-7 col-start-2 md:col-start-3 text-base md:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut consectetur placeat iure suscipit quidem dignissimos reprehenderit quam.</h3>
                <button className='col-span-2 md:col-start-4 col-start-3 text-nowrap bg-cyan-600 hover:bg-transparent hover:border-4 hover:border-cyan-400 hover:scale-110 transition transform delay-10 hover:text-gray-200 text-lg px-8 py-2'>Learn More</button>
            </div>
        </Suspense>
  )
}

export default Hero
