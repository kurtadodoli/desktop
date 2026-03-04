import './About.css'

function About({ onBack }) {
  return (
    <div className="about-container">
      <div className="about-card">
        <button className="back-btn" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          back
        </button>

        <div className="about-hero">
          <div className="about-avatar">
            <span>K</span>
          </div>
          <h2 className="about-name">Kurt Adodoli</h2>
          <p className="about-role">Developer • Musician • Editor</p>
        </div>

        <div className="about-section">
          <h3 className="section-title">
            <span className="section-dot"></span>
            about me
          </h3>
          <p className="about-text">
            I'm a creative developer passionate about building beautiful digital experiences. 
            With interests spanning across web development, music production, and video editing, 
            I bring a multidisciplinary approach to everything I create.
          </p>
          <p className="about-text">
            Currently focused on front-end development with React, I love crafting 
            responsive and interactive web applications that feel alive. When I'm not coding, 
            you'll find me making music or editing videos.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
