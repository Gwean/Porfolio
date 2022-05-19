import '../../styles/Home.css'
function Home(){
    return(
        <div className='Home'>
           <div className='Left'>
           
           </div>
           <div className='Right'>
               <h2 style={{fontSize:'50px', margin: 'none'}}>
                HOLA,
               </h2>
               <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus metus, varius eu sapien non, gravida scelerisque felis. Ut sed egestas mi, sit amet vestibulum orci. Morbi rutrum vehicula arcu id egestas. Nunc lobortis pellentesque justo, quis fringilla eros accumsan eget. Aliquam est odio, volutpat ut urna eu, faucibus sodales diam. 
               </p>
               <div className="ButtonsContainer">
               <button className='Button' style={{backgroundColor: '#9997f1'}}>
                    Resumé
               </button>
               <button className='Button'>
                    Projects
               </button>
               </div>

           </div>
        </div>
    );
}

export default Home;