import React from 'react';
import './ReviewMenu.css';

const reviews = [
    {
        title: "The Too-Perfect Saint",
        pic: "../assets/animecover/PerfectSaint.png",
    },
    {
        title: "Ameku M.D.: Doctor Detective",
        pic: "../assets/animecover/AmekuTakao.png",
    },
    {
        title: "Secrets of the Silent Witch",
        pic: "../assets/animecover/ChinmokuMajou.png",
    },
    {
        title: "Demon Slayer: Swordsmith Village Arc",
        pic: "../assets/animecover/KimetsuYaiba4.png"
    },
    {
        title: "Frieren: Beyond Journey’s End",
        pic: "../assets/animecover/Frieren.png",
    },
    {
        title: "Bocchi the Rock!",
        pic: "../assets/animecover/Bocchi.png",
    },
];

function ReviewMenu() {
  return (
    <div className='revcont'>
      <h2 className='title'>New Release</h2>
      <div className='scrollcont'>
        {reviews.map((anime, index) => (
            <div className="card">
                <img src={anime.pic} />
                <div className="overlay">
                    <h3 className="animetitle">{anime.title}</h3>
                    <div className="extra">{anime.rating}</div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewMenu;
