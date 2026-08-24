import Header from './Header.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'

const skills = [
  'NodeJS', 'Problem Solving', 'C++', 'React', 'MongoDB'
]

const Home = () => {
  return (
    <>
      <Header
        name="Mitesh Patil"
        subtitle="Mitesh's Portfolio"
      />
      <About bio="I am a Computer Science Student passionate about building web applications and solving problems with code." />
      <Skills skillList={skills} />
    </>
  )
}

export default Home
