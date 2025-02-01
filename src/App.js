import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Listing from './pages/Listing/Listing';
import Nav from './Nav/Nav'
import Footer from './Nav/Footer';
import Multimedia from './pages/Multimedia/Multimedia';
import { useEffect } from 'react';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
export default  function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current Path:", location.pathname);
    if (location.pathname === "/listing") {
      document.body.classList.add("listing-body");
      document.body.classList.remove("home-body");
    } 
    else {
      document.body.classList.add("home-body");
      document.body.classList.remove("listing-body");
    }
  }, [location]);
  return (
    <div className="App">
      {location.pathname !== '/' &&location.pathname !== '/listing' &&location.pathname !== '/multimedia' &&location.pathname !== '/categories'&&location.pathname !== '/contact'&&location.pathname !== '/login' &&location.pathname !== '/signup'&& <Nav />}
      {location.pathname !== '/' &&location.pathname !== '/listing' &&location.pathname !== '/multimedia' &&location.pathname !== '/categories'&&location.pathname !== '/contact'&&location.pathname !== '/login'&&location.pathname !== '/signup'&& <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/multimedia" element={<Multimedia/>} /> 
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} />   
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />      
      </Routes>
      {location.pathname !== '/'&&location.pathname !== '/listing' &&location.pathname !== '/multimedia' &&location.pathname !== '/categories'&& location.pathname !== '/contact'&&location.pathname !== '/login'&& location.pathname !== '/signup'&&<Footer/>}
      {location.pathname !== '/'&&location.pathname !== '/listing' &&location.pathname !== '/multimedia' &&location.pathname !== '/categories'&& location.pathname !== '/contact'&&location.pathname !== '/login'&&location.pathname !== '/signup'&&<Footer/>}
    </div>
  );
}