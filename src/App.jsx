
import Hero from './Components/Hero.jsx'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  
  return (
      <Router>
        {/* <Parallax pages={0.1}>
          <ParallaxLayer offset={0} speed={0.5}  > */}
          <Navbar />
          {/* </ParallaxLayer>
        </Parallax> */}
        {/* <Hero /> */}
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
