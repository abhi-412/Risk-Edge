import React from 'react'
import { Suspense, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import SineMotion from '../3D/SineMotion'

const Hero = () => {
  return (
        <Suspense fallback={null}>
            <Canvas className='relative opacity-55'>
                {/* <OrbitControls /> */}
              <SineMotion  />
            </Canvas>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-3xl'>Hi guys</h1>
            </div>
        </Suspense>
  )
}

export default Hero
