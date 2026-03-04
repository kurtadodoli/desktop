import './Hero.css'
import Navigation from './Navigation'

function Hero({ onNavigate }) {
  const EmailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  )

  return (
    <div className="hero-container">
      <div className="hero-card">
        <div className="hero-header">home</div>
        <div className="hero-content">
          <h1 className="hero-title">
            hi! <span className="highlight">i'm kurt</span>
          </h1>
          <p className="hero-subtitle">aspiring musician, developer, and editor</p>
        </div>
        <Navigation onNavigate={onNavigate} />
        <div className="hero-footer">
          <div className="social-icons">
            <a href="mailto:kurtadodoli@gmail.com" className="social-icon email-icon">
              <EmailIcon />
            </a>
            <a href="#" className="social-icon">●</a>
            <a href="#" className="social-icon">◉</a>
          </div>
          <p className="copyright">© 2025 Kurt Adodoli</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
