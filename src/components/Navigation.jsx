import './Navigation.css'

function Navigation({ onNavigate }) {
  const WorkIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
    </svg>
  )

  const LinksIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  )

  const navItems = [
    { id: 'about', label: 'about', icon: 'ⓘ' },
    { id: 'links', label: 'links', icon: null, customIcon: 'links' },
    { id: 'work', label: 'work', icon: null, customIcon: 'work' },
    { id: 'faq', label: 'faq', icon: '?' },
    { id: 'contact', label: 'contact', icon: '✉' }
  ]

  const renderIcon = (item) => {
    if (item.customIcon === 'work') return <WorkIcon />
    if (item.customIcon === 'links') return <LinksIcon />
    return item.icon
  }

  return (
    <nav className="navigation">
      {navItems.map(item => (
        <button
          key={item.id}
          className="nav-item"
          onClick={() => onNavigate(item.id)}
        >
          <div className="nav-icon">
            {renderIcon(item)}
          </div>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default Navigation
