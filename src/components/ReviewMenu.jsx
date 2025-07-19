import React, { useRef } from 'react';
import './ReviewMenu.css';

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

  const scrollLeft = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollBy({left:-220, behaviour:'smooth'})
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
        scrollRef.current.scrollBy({left:220, behaviour:'smooth'})
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
                <div className="card" key={index}>
                    <img src={anime.pic} />
                    <div className="overlay">
                        <h3 className="animetitle">{anime.title}</h3>
                    </div>
                </div>
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
