  import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFound.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer email="mapatilk101@gmail.com" />
    </div>
  )
}

export default App
