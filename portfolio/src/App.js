import './App.css';
import Home from './components/sections/Home.js';
//import Nav from './components/Nav.js';
import AboutMe from './components/sections/AboutMe';
import Work from './components/sections/Work.js';
import Contact from './components/sections/Contact.js';
import { Link, animateScroll as scroll } from "react-scroll";
import './styles/Nav.css'

function App() {
  return (
    <div className="App">
       <div className="Nav">
            <ul className="NavLinks">
            <li  className="Links">
            <Link  to="Home"
             spy={true}
             smooth={true}
             offset={0}
             duration={300}>Home</Link>
            
            </li>
            <li  className="Links">
            <Link to="AboutMe" 
                spy={true}
                smooth={true}
                offset={0}
                duration={300}>About Me</Link>
                </li>
           <li className="Links">
            <Link to="Work"
             spy={true}
             smooth={true}
             offset={0}
             duration={300}>Work</Link> </li> 
            <li  className="Links">
            <Link to="Contact"
             spy={true}
             smooth={true}
             offset={0}
             duration={300}>Contact</Link></li>
            </ul>
        </div>
      <Home id="Home" name="Home" />
      <AboutMe id="AboutMe" name="AboutMe" />
      <Work id="Work" name="Work"/>
      <Contact id="Contact" name="Contact"  />
    </div>
  );
}

export default App;
