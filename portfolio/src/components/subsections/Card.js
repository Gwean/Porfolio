import Ilustracion from "../../assets/Tattu.png"
import { ReactComponent as Flag}  from "../../assets/Flag.svg"
import '../../styles/Card.css';

function Card(){
    return(
        <div className="Card " >
            <img className=" image1 " src={Ilustracion}/>
            <Flag className="image2"/>
            <p style={{alignSelf : 'flex-end', marginRight: '5%'}}>June 2021</p>
           
                <h3 className="CardLeft">Project Name</h3>
                    <ul className="CardLeft" style={{margin: '0% 10% 5%'}}>
                        <li style={{textAlign : 'left'}}>Adobe Illustrator</li>
                        <li style={{textAlign : 'left'}}>Figma</li>
                    </ul>
        </div>
    );
}

export default Card; 