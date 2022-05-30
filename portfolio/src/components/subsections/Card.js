import Ilustracion from "../../assets/Tattu.png"
import { ReactComponent as Flag}  from "../../assets/Flag.svg"
import '../../styles/Card.css';

function Card(){
    return(
        <div className="Card " >
            <button className="CardButton">
                <img className=" image1 " src={Ilustracion}/>
                    <div >
                        <Flag className="image2"/>
                        <p className="imageText">GD</p>
                    </div>
                <p style={{alignSelf : 'flex-end', marginRight: '5%', marginBottom : '0%'}}>June 2021</p>
                <div style={{display : 'flex', alignItems: 'center', width : '100%'}}>  
                    <h3 className="CardLeft">Project Name </h3>
                    <p className="SideText">- UI and Logo Design</p>
                </div>
                    <ul className="CardLeft" style={{margin: '0% 10% 5%' }}>
                        <li style={{textAlign : 'left'}}>Adobe Illustrator</li>
                        <li style={{textAlign : 'left'}}>Figma</li>
                    </ul>
            </button>
        </div>
    );
}

export default Card; 