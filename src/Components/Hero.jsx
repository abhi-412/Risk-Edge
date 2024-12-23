import React, { useEffect, useRef } from 'react'
import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
// import SineMotion from '../3D/SineMotion'
import { useNavigate } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import Laptop from '../3D/Laptop'
import { OrbitControls } from '@react-three/drei'
import Robot from '../3D/Robot'

const Hero = () => {
  const navigate = useNavigate();

// useEffect(()=>{
  
//   const between = (min, max) => Math.random() * (max - min) + min
//   const bubblesContainer = document.getElementById("bubbles");
//   setInterval(() => {
//     const bubble = document.createElement("div");
//     bubble.classList.add("bubble");
    
//     bubblesContainer.appendChild(bubble);
  
//     bubble.style.left = `${between(0, 100)}%`;
  
//     const sizePx = `${between(4, 8)}px`;
  
//     const floatingBubbleKeyFrames = [
//       { top: '100%' },
//       { top: `-${sizePx}` }
//     ]
  
//     const floatingAnimation = bubble.animate(
//       floatingBubbleKeyFrames,
//       between(10000, 40000),
//     );
  
//     floatingAnimation.onfinish = () => {
//       bubblesContainer.removeChild(bubble);
//     }
  
//     bubble.style.width = sizePx;
//     bubble.style.height = sizePx;
  
//     const colors = ["#e44141", "#4f2af3"];
//     const randomColorIndex = 
//       Math.floor(Math.random() * colors.length);
//     bubble.style.background = colors[randomColorIndex];
  
//     bubble.style.opacity = `${between(20, 70)}%`;
//   }, 300);
// },[])

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
        <div className='flex  min-h-[100vh] md:h-screen h-full gap-4 items-center lg:pr-32 justify-center '>
            <div className='min-h-[30vh] max-w-2xl text-white col-span-2 mx-auto flex flex-col gap-5 items-center justify-center'>
                <h1 data-value="RISK EDGE"  onMouseOver={(e)=>{mouseOverFunc(e)}} className='myH1 bg-gradient-to-b from-[#e44141] to-[#4f2af3] bg-clip-text text-transparent mb-0 xl:text-8xl lg:text-7xl sm:text-6xl text-5xl text-start font-bold'>RISK EDGE</h1>
                <h3 className='px-6 text-center text-base sm:text-xl md:text-2xl'>Risk Edge is a leading Solution provider for Machine Learning & Risk Analytics, used by medium and large Energy & Commodity Trading Players</h3>
                <button id='mainBtn' onClick={() => {navigate('/about')}} className='btn col-span-3 text-center text-nowrap bg-gray-400 hover:bg-transparent hover:border-4 hover:border-white hover:scale-110 transition transform delay-10 hover:text-gray-200 md:text-lg text-sm px-8 py-2 mt-1'>Learn More</button>
            </div>
            {/* <Suspense className='md:col-span-1 col-span-2 relative w-full flex items-center justify-center' fallback={null}>
              <div className='rounded-full absolute md:top-20 top-48 z-10 w-[400px] h-[500px]  md:right-64 right-0 opacity-40  blur-[160px] bg-gradient-to-b from-green-600 to-purple-700 bg-opacity-70'></div>
              <Canvas gl={{antialias: true}} dpr={[1, 2]} className='md:col-span-1 col-span-2 flex items-center bg-transparent w-full h-full'>
              <ambientLight intensity={3} />
                <Robot position={[0,-1,0.4]} scale={[1.6,1.6,1.6]}/>
              </Canvas>
            </Suspense> */}
           
        </div>
  )
}

export default Hero
