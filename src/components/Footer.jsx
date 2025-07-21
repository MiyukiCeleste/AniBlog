import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/AniBlog.svg'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footcont">
        <div className="brief">
          <Link to='/home' onClick={() => window.scrollTo(0, 0)} >
            <img src={Logo} />
          </Link>
          <p>
            Discover, share, and rate your favorite anime - join
            the Aniblog community and let your voice shape the 
            ultimate anime watchlist!
          </p>
        </div>
        <div className="lists">
          <ul>
            <li><Link to='/privacy' className='list'>Privacy</Link></li>
            <li><Link to='/dmca' className='list'>DMCA</Link></li>
            <li><Link to='/faq' className='list'>FAQ</Link></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2025 <Link to="/home" className='link' onClick={() => window.scrollTo(0, 0)}>
              AniBlog&trade;
            </Link> | Made by <span>Astellaris</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
