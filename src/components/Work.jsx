import './Work.css'

function Work({ onBack }) {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React and Vite featuring a clean black & white design with smooth animations.',
      tags: ['React', 'Vite', 'CSS'],
      status: 'Live',
      color: '#e74c3c'
    },
    {
      title: 'Music Player App',
      description: 'An interactive web-based music player with playlist management and audio visualization features.',
      tags: ['JavaScript', 'Web Audio API', 'CSS'],
      status: 'In Progress',
      color: '#333'
    },
    {
      title: 'Video Editor Tool',
      description: 'A browser-based video editing tool with timeline, cuts, transitions and export capabilities.',
      tags: ['React', 'FFmpeg', 'Canvas'],
      status: 'Planned',
      color: '#888'
    },
    {
      title: 'Social Dashboard',
      description: 'A unified dashboard to track and manage social media analytics across multiple platforms.',
      tags: ['React', 'API', 'Charts'],
      status: 'Planned',
      color: '#888'
    }
  ]

  return (
    <div className="work-container">
      <div className="work-card">
        <button className="back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          back
        </button>

        <div className="work-header">
          <h2 className="page-title">work</h2>
          <p className="page-subtitle">Projects I've been working on</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-item" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="project-top">
                <div className="project-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span className="project-status" style={{ color: project.color }}>
                  {project.status}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work

