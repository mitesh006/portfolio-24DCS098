import './Header.css'

const Header = ({ name, subtitle }) => {
  return (
    <header className='header-section'>
      <div className="header-container">
        <h1 className='header-title'>{name}</h1>
        <p className='header-subtitle'>{subtitle}</p>
      </div>
    </header>
  )
}

export default Header
