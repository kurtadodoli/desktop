import './About.css'

function About({ onBack }) {
  return (
    <div className="about-container">
      <div className="about-card">
        <button className="back-btn" onClick={onBack}>← back</button>
        <h2 className="page-title">about</h2>
        <div className="about-content">
          <p>Hi! I'm Kurt, a creative developer and designer passionate about building beautiful digital experiences.</p>
          <p>With a background in illustration and animation, I bring a unique perspective to web development, combining visual design with functional code.</p>
          <p>I specialize in front-end development with React, creating responsive and interactive web applications.</p>
        </div>
      </div>
    </div>
  )
}

export default About
