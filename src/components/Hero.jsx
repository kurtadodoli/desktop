import './Hero.css'
import Navigation from './Navigation'

function Hero({ onNavigate }) {
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
          <p className="copyright">© 2025 Kurt Adodoli</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
