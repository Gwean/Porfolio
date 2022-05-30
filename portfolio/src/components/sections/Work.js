import Card from "../subsections/Card";

function Work(){
    return(
        <div className="Work" style={{minHeight:"200px"}}>
       <h2>
          Work
       </h2>
       <div style={{display : 'flex', justifyContent : 'space-evenly', width : '100%'}}>
           <Card/>
           <Card/>
       </div>
        </div>
    );
}

export default Work; 
