import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import "./App.css";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Blog from './pages/Blog';
import Header from './components/header';

export default function App() {
  return (
  <BrowserRouter>
  <Header />
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/blog' element={<Blog />}/>
    </Routes>
  </BrowserRouter>
)}
