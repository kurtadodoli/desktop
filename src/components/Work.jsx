import './Work.css'

function Work({ onBack }) {
  const projects = [
    { title: 'Project 1', description: 'A modern web application' },
    { title: 'Project 2', description: 'Interactive design system' },
    { title: 'Project 3', description: 'Mobile-first experience' }
  ]

  return (
    <div className="work-container">
      <div className="work-card">
        <button className="back-btn" onClick={onBack}>← back</button>
        <h2 className="page-title">work</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work

