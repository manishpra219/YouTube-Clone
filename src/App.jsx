import React, { useState } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Declare state

  return (
    <div>
     
      <Navbar setSidebar={setSidebar} />
      <Sidebar sidebar={sidebar} /> {/* Pass sidebar state to Sidebar */}
      <Routes>
      <Route path='/' element={<Home sidebar={sidebar} />} />
      <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;


