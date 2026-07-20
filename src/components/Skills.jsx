import './Skills.css'

const Skills = ({ skillList }) => {
  return (
    <section className='skills-section'>
      <div className="skills-container">
        <h2 className='section-title'>Skills</h2>
        <p className='skills-subtitle'>Technologies and tools I work with</p>
        <ul className='skills-grid'>
          {skillList.map((s) => (
            <li className='skill-chip' key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
