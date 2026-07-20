import './Footer.css'

const Footer = ({ email }) => {
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <a className='footer-email' href={`mailto:${email}`}>{email}</a>
        <p className='footer-copy'>&copy; {new Date().getFullYear()} &middot; Mitesh Patil</p>
      </div>
    </footer>
  )
}

export default Footer
