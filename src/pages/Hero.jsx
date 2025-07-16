import { useNavigate } from 'react-router-dom';
import Icon from '../assets/icon.svg';
import './Hero.css';


function Hero() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };
  
  return (
    <div className='land'>
      <div className='info'>
        <img src={Icon} className='svgbg'/>
        <div className='grad'>
          <h2 className='stroke'><span>Ani</span>Blog</h2>
          <h2 className='gradient'><span>Ani</span>Blog</h2>
        </div>
        <p>Write your review and rate your favorite Anime!</p>
        <button onClick={handleStart}>Click here to start</button>
      </div>
    </div>
  )
}

export default Hero;
