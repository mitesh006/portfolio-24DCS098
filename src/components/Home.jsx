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
      
      <section className="github-calendar-section">
        <div className="container" style={{ marginTop: '20px', marginBottom: '40px' }}>
          <h2 className="section-title">GitHub Contributions</h2>
          <div className="github-chart-wrapper">
            <img 
              className="github-chart-img"
              src="https://ghchart.rshah.org/mitesh006" 
              alt="Mitesh's GitHub Contributions" 
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
