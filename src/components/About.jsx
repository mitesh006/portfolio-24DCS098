import './About.css'

const About = ({ bio }) => {
  return (
    <section className='about-section'>
      <div className="about-container">
        <h2 className='section-title'>About Me</h2>
        <p className='about-content'>{bio}</p>
      </div>
    </section>
  )
}

export default About
