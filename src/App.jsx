import './App.css'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

const App = () => {

  const skills = [
    'NodeJS', 'Problem Solving', 'C++', 'React', 'MongoDB'
  ]

  return (
    <>
      <Header
        name="Mitesh Patil"
        subtitle="Mitesh's Portfolio"
      />
      <About bio="I am a Computer Science Student passionate about building web applications and solving problems with code." />
      <Skills skillList={skills} />
      <Footer email="mapatilk101@gmail.com" />
    </>
  )
}

export default App
