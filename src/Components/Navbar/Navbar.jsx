import React from 'react'; // Import React correctly
import './Navbar.css'; // Import your CSS file

// Correct imports for assets
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';
import  ylogo from '../../assets/ylogo.jpg';



const Navbar = ({ setSidebar }) => {

// const Navbar = (setSidebar) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu Icon" />
        {/* <Link to='/'><img className='logo' src={logo} alt="Logo" /></Link> */}
        <Link to='/'><img className='logo' src={ylogo} alt="Logo" /></Link>
      </div>

      <div className='nav-middle flex-div'>
        <div className='search-box flex-div'>
          <input type='text' placeholder='Search' />
          <img src={search_icon} alt="Search Icon" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img className='upload_icon' src={upload_icon} alt="Upload Icon" />
        <img className='more_icon' src={more_icon} alt="More Icon" />
        <img className='notification_icon' src={notification_icon} alt="Notification Icon" />
        <img className='user_icon' src={profile_icon} alt="Profile Icon" />
      </div>
    </nav>
  )
}

export default Navbar;
