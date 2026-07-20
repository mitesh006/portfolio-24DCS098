import './Projects.css'

const projects = [
  {
    name: 'Weather Dashboard',
    description: 'A real-time weather application built with React that fetches and displays weather data using a public API.',
  },
  {
    name: 'Task Tracker',
    description: 'A simple task management app with add, delete, and toggle functionality using React state management.',
  },
  {
    name: 'Student Portfolio',
    description: 'A personal portfolio website built with Vite and React showcasing skills, projects, and contact information.',
  },
]

const Projects = () => {
  return (
    <section className='projects-section'>
      <div className="projects-container">
        <h2 className='section-title'>Projects</h2>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <div className='project-card' key={project.name}>
              <p className='project-number'>Project {index + 1}</p>
              <h3 className='project-name'>{project.name}</h3>
              <p className='project-desc'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
