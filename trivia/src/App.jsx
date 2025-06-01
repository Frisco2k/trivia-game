import Nav from './components/Widgets/Nav.jsx';
import About from './components/pages/about.jsx';
import Home from './components/pages/home.jsx';
import Contact from './components/pages/contact.jsx';
import HowToPlay from './components/pages/how-to-play.jsx';

import {Routes, Route, useLocation} from 'react-router-dom';

 function App(){
    const location = useLocation();
    const path = location.pathname;
    let navText = "Welcome to Frisco's Trivia Game";

    if(path == '/about') navText = 'About my website..';
    else if(path == '/contact') navText = 'Contact Information';
    else if(path == '/how-to-play') navText= 'How to play';

    return(
        <>
        <Nav text = {navText} />
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/about" element = {<About/>} />
            <Route path = "/contact" element = {<Contact/>} />
            <Route path = "/how-to-play" element = {<HowToPlay/>} />
        </Routes>
        </>
    );
}
export default App;