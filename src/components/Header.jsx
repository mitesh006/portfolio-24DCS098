import './Header.css'

const Header = ({ name, subtitle }) => {
  return (
    <header className='header-section'>
      <div className="header-container">
        <p className='header-greeting'>Hello, I'm</p>
        <h1 className='header-title'>{name}</h1>
        <p className='header-subtitle'>{subtitle}</p>
        <hr className='header-divider' />
      </div>
    </header>
  )
}

export default Header
