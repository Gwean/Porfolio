import '../../styles/Home.css'
import Foto from '../../assets/Yo.png'

function Home(){
    return(
        <div className='Home'>
           <div className='Left'>
           <img alt='Una foto mia' src= '../../assets/Yo.png'></img>
           
           </div>
           <div className='Right'>
               <h2 style={{fontSize:'50px', marginLeft:0 }}>
                HOLA,
               </h2>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus metus, varius eu sapien non, gravida scelerisque felis. Ut sed egestas mi, sit amet vestibulum orci. Morbi rutrum vehicula arcu id egestas. Nunc lobortis pellentesque justo, quis fringilla eros accumsan eget. Aliquam est odio, volutpat ut urna eu, faucibus sodales diam. 
               </p>
               <button className='Button'>
                    Projects
               </button>
           </div>
        </div>
    );
}

export default Home;