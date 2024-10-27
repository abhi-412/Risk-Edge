import React from 'react'
import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SineMotion from '../3D/SineMotion'
import Bot from '../3D/Bot'

const Hero = () => {

   

  return (
        <Suspense className='w-full h-full flex items-center justify-center' fallback={null}>
            <Canvas className='relative h-full opacity-110'>
            <ambientLight />
              <SineMotion  />
            </Canvas>
            <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-7xl text-center font-semibold text-gray-100'>Agentur für Headless-Softwarelösungen mit Business Impact</h1>
            </div>
        </Suspense>
  )
}

export default Hero
