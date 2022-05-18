import Ilustracion from '../../assets/Ilustracion.png'
import Scroll from 'react-scroll';
import '../../styles/AboutMe.css';

const ScrollLink = Scroll.ScrollLink;

function AboutMe(){
    return(
        <div className="AboutMe" style={{minHeight:"200px"}}>
       <h2>
           About me 
       </h2>
       <img className="Ilustracion" src={Ilustracion} alt="Logo" />
        </div>
    );
}

export default AboutMe; 
