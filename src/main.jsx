import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

const pc = particlesCursor({
  el: document.getElementById('app'),
  gpgpuSize: 512,
  colors: [0x00ffff, 0x0000ff],
  color: 0xffffff,
  coordScale: 0.5,
  noiseIntensity: 0.0009,
  noiseTimeCoef: 0.0009,
  pointSize: 10,
  pointDecay: 0.009,
  sleepRadiusX: 250,
  sleepRadiusY: 250,
  sleepTimeCoefX: 0.001,
  sleepTimeCoefY: 0.002
})

document.body.addEventListener('click', () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
  pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})


document.body.addEventListener('click', () => {
  pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
  pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2
  pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
  pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
