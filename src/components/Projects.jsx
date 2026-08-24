import './Projects.css'

const projects = [
  {
    name: 'Neon Snake',
    description: 'A classic Snake Game built with JavaScript featuring smooth controls, score tracking and high score.',
    technologies: ['ReactJS', 'Logic'],
    codeUrl: 'https://github.com/mitesh006/neon-snake',
    liveUrl: 'https://neon-snake-tan.vercel.app/',
  },
  {
    name: 'Stock Guru',
    description: 'A Stock Market Analyzer which analyze and predict stock prices, made for understanding backend, APIs, Auth Systems, Databases.',
    technologies: ['NodeJS', 'MongoDB', 'Vanilla', 'APIs'],
    codeUrl: 'https://github.com/mitesh006/StockGuru',
    liveUrl: 'https://stock-guru-neo.vercel.app/',
  },
  {
    name: 'Airlines System',
    description: 'A core terminal based project simulating airline booking system which uses core features of OOPS.',
    technologies: ['C++', 'Logic', 'FileSystem', 'OOPS'],
    codeUrl: 'https://github.com/mitesh006/Airlines_System',
    liveUrl: null,
  },
]

const Projects = () => {
  return (
    <section className='projects-section'>
      <div className='projects-container'>
        <h2 className='section-title'>Projects</h2>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div className='project-card' key={project.name}>
              <p className='project-number'>Project {index + 1}</p>
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-desc'>{project.description}</p>
              <div className='project-tags'>
                {project.technologies.map((tech) => (
                  <span className='project-tag' key={tech}>{tech}</span>
                ))}
              </div>
              <div className='project-links'>
                <a href={project.codeUrl} target='_blank' rel='noopener noreferrer' className='project-link'>
                  Code ↗
                </a>
                {project.liveUrl && (
                  <a href={project.liveUrl} target='_blank' rel='noopener noreferrer' className='project-link project-link--live'>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
