import React from 'react';
import './Sidebar.css';
import { API_KEY } from '../../data';
// Import assets
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar, category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
          <img src={home} alt="Home Icon" /><p>Home</p>
        </div>
        <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="Gaming Icon" /><p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="Automobiles Icon" /><p>Automobiles</p>
        </div>
        <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="Sports Icon" /><p>Sports</p>
        </div>
        <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="Entertainment Icon" /><p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="Tech Icon" /><p>Tech</p>
        </div>
        <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="Music Icon" /><p>Music</p>
        </div>
        <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="Blogs Icon" /><p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?"active":""}`}  onClick={()=>setCategory(25)}>
          <img src={news} alt="News Icon" /><p>News</p>
        </div>
      </div>

      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link'>
          <img src={jack} alt="Jack" /><p>PewDiePie</p>
        </div>
        <div className='side-link'>
          <img src={simon} alt="Simon" /><p>MrBeast</p>
        </div>
        <div className='side-link'>
          <img src={tom} alt="Tom" /><p>Justin Bieber</p>
        </div>
        <div className='side-link'>
          <img src={megan} alt="Megan" /><p>5-Minute Crafts</p>
        </div>
        <div className='side-link'>
          <img src={cameron} alt="Cameron" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
