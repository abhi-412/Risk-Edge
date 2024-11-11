
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

  const navbarRef = useRef();
  const pageOneRef = useRef();
  const pageTwoRef = useRef();
  const pageThreeRef = useRef();
  
  const [navbarColor, setNavbarColor] = useState("bg-transparent");



  useEffect(() => {
    const handleScroll = debounce(() => {
      if (pageOneRef.current && pageTwoRef.current && pageThreeRef.current) {
        const pageOneTop = pageOneRef.current.getBoundingClientRect().top;
        const pageTwoTop = pageTwoRef.current.getBoundingClientRect().top;
        const pageThreeTop = pageThreeRef.current.getBoundingClientRect().top;
  
        if (pageOneTop >= 0) {
          setNavbarColor("bg-transparent");
        } else if (pageTwoTop >= 0) {
          setNavbarColor("bg-white");
        } else if (pageThreeTop >= 0) {
          setNavbarColor("bg-black");
        }
      }
    }, 100); // Debounce delay of 100ms
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageOneRef, pageTwoRef, pageThreeRef]);
  
  
  
  return (
      <Router>
        {/* <Parallax pages={0.1}>
          <ParallaxLayer offset={0} speed={0.5}  > */}
          <Navbar navbarRef={navbarRef} navbarColor={navbarColor} />
        <Routes>
            <Route path='/' element={<Home pageOneRef={pageOneRef} pageTwoRef={pageTwoRef} pageThreeRef={pageThreeRef} />} />
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
