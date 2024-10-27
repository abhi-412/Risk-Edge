
import Hero from './Components/Hero.jsx'
import Navbar from './Components/Navbar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'

function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
