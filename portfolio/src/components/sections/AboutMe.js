import Ilustracion from '../../assets/AboutMe.png'
import Scroll from 'react-scroll';
import '../../styles/AboutMe.css';

const ScrollLink = Scroll.ScrollLink;

function AboutMe(){
    return(
        <div className="AboutMe" style={{minHeight:"200px"}}>
            <h2 className="Title">About Me</h2>
       <img className="Ilustracion" src={Ilustracion} alt="Logo"/>
        </div>
    );
}

export default AboutMe; 
