import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <section className='notfound-section'>
      <div className='notfound-container'>
        <p className='notfound-code'>404</p>
        <h2 className='notfound-title'>Page not found</h2>
        <p className='notfound-text'>
          This page doesn't exist or has been moved.
        </p>
        <Link to="/" className='notfound-link'>
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
