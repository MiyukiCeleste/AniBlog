import { Link } from 'react-router-dom'
import ScrollLink from './scrollhelp/ScrollLink';

import Logo from '../assets/AniBlog.svg'
import '../styles/Footer.css';


function Footer() {
  return (
    <footer>
      <div className="footcont">
        <div className="brief">
          <ScrollLink to='/home'>
            <img src={Logo} />
          </ScrollLink>
          <p>
            Discover, share, and rate your favorite anime - join
            the Aniblog community and let your voice shape the 
            ultimate anime watchlist!
          </p>
        </div>
        <div className="lists">
          <ul>
            <li><ScrollLink to='/privacy' className='list' onClick={() => window.scrollTo(0, 0)}>Privacy</ScrollLink></li>
            <li><ScrollLink to='/dmca' className='list' onClick={() => window.scrollTo(0, 0)}>DMCA</ScrollLink></li>
            <li><ScrollLink to='/faq' className='list' onClick={() => window.scrollTo(0, 0)}>FAQ</ScrollLink></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2025 <ScrollLink to="/home" className='link'>
              AniBlog&trade;
            </ScrollLink> | Made by <span>Astellaris</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
