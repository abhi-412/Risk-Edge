import { useProgress, Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const {progress,active} = useProgress()
  return (
    <Html center>
        {progress.toFixed(1)}% Loaded
    </Html>
  )
}

export default Loader
