import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Gallery from './componen/Gallery';
import Home from './componen/Home';
import User from './componen/User';
import Favorite from './componen/Favorite';
import Settings from './componen/Settings';
import Profile from './componen/Profile';
import Music from './componen/Music';
import Film from './componen/Film';

function App() {
  return (
    <>
     <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/user">User</Link> </li>
        <ul>
          <li> <Link to="/user/settings">Settings</Link> </li>
          <li> <Link to="/user/profile">Profile</Link> </li>
        </ul>
      <li> <Link to="/gallery">Gallery</Link> </li>
      <li> <Link to="/favorite">Favorite</Link> </li>
        <ul>
          <li> <Link to="/favorite/music">Music</Link> </li>
          <li> <Link to="/favorite/film">Film</Link> </li>
        </ul>
    </ul>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/user/settings' element={<Settings />} />
      <Route path='/user/profile' element={<Profile />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/favorite/music' element={<Music />} />
      <Route path='/favorite/film' element={<Film />} />
    </Routes>
    </>
  );
}

export default App;
