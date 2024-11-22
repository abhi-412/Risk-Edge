
import Hero from './Components/Hero.jsx'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useEffect, useRef, useState } from 'react'
  import { debounce } from 'lodash';

import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

import MachineLearning from './Pages/MachineLearning.jsx'
import MarketEdge from './Pages/MarketEdge.jsx'
import PlanEdge from './Pages/PlanEdge.jsx'
import VarEdge from './Pages/VarEdge.jsx'
import CreditRisk from './Pages/CreditRisk.jsx'


function App() {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  
  
  
  return (
      <Router>
        {/* <Parallax pages={0.1}>
          <ParallaxLayer offset={0} speed={0.5}  > */}
          <Navbar  navbarColor={navbarColor} />
        <Routes>
            <Route path='/' element={<Home setNavbarColor={setNavbarColor} />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/predictive-analytics-apps' element={<MachineLearning />} />
            <Route path='/market-edge' element={<MarketEdge />} />
            <Route path='/plan-edge' element={<PlanEdge />} />
            <Route path='/var-edge' element={<VarEdge />} />
            <Route path='/credit-risk' element={<CreditRisk />} />
            
        </Routes>
      </Router>
  )
}

export default App
