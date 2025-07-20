import React, { useRef, useState } from 'react';
import '../styles/ReviewMenu.css';

import Left from '../assets/leftright/left.svg';
import Right from '../assets/leftright/right.svg';

import PerfectSaint from '../assets/animecover/PerfectSaint.png';
import Ameku from '../assets/animecover/AmekuTakao.png';
import ChinmokuMajou from '../assets/animecover/ChinmokuMajou.png';
import Kimetsu4 from '../assets/animecover/KimetsuYaiba4.png';
import Frieren from '../assets/animecover/Frieren.png';
import Bocchi from '../assets/animecover/Bocchi.png';

import Hanako2 from '../assets/animecover/Hanako2.jpg'
import Kusuriya2 from '../assets/animecover/Kusuriya2.jpg';
import BossOnTime from '../assets/animecover/ClockBossOntime.jpg';

const reviews = [
    {
        title: "The Too-Perfect Saint: Tossed Aside by My Fiancé and Sold to Another Kingdom",
        pic: PerfectSaint,
    },
    {
        title: "Ameku M.D.: Doctor Detective",
        pic: Ameku,
    },
    {
        title: "Secrets of the Silent Witch",
        pic: ChinmokuMajou,
    },
    {
        title: "Demon Slayer: Swordsmith Village Arc",
        pic: Kimetsu4
    },
    {
        title: "Frieren: Beyond Journey’s End",
        pic: Frieren,
    },
    {
        title: "Bocchi the Rock!",
        pic: Bocchi,
    },
    {
        title:"Toilet-bound Hanako-kun Season 2",
        pic: Hanako2,
    },
    {
        title: "The Apothecary Diaries Season 2",
        pic: Kusuriya2,
    },
    {
        title:"I May Be a Guild Receptionist, but I’ll Solo Any Boss to Clock Out on Time",
        pic: BossOnTime,
    },
];

function ReviewMenu() {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index) => {
    if (!scrollRef.current || !cardRefs.current[index]) return;
    
    const container = scrollRef.current;
    const card = cardRefs.current[index];

    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;

    const newScrollLeft = cardCenter - containerCenter;
    container.scrollTo({left: newScrollLeft, behavior: 'smooth'});

    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < reviews.length - 1) {
        scrollToCard(currentIndex + 1);
    }
  };

  return (
    <div className='revcont'>
      <h2 className='title'>New Release</h2>
      <div className="wrap">
        <button className="scrollbutt left" onClick={scrollLeft}>
            <img src={Left} />
        </button>
        <div className='scrollcont' ref={scrollRef}>
            {reviews.map((anime, index) => (
                <a href='' className="card" key={index} ref={el => cardRefs.current[index] = el}>
                    <img src={anime.pic} />
                    <div className="overlay">
                        <h3 className="animetitle">{anime.title}</h3>
                    </div>
                </a>
            ))}
        </div>
        <button className="scrollbutt right" onClick={scrollRight}>
            <img src={Right} />
        </button>
      </div>
    </div>
  );
}

export default ReviewMenu;
