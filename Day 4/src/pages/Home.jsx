import { Panel } from 'rsuite';
import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';



export default function home(){
    const Navigate =useNavigate();
    const handleChange=()=>{
        Navigate("/wedding");
    }
    return(
        <>
        <div>
        <div className='home'>
        <NavigationBar/>
        <div className="contain">
            {/* <img className="homepic" src={homeback} alt="pic1" /> */}
            <div className="text-block">
                <p className="text1"></p>
             
            </div>
            </div>
            </div>
            <div style={{display:'flex'}}>
    
    <div>
        {/* <h1 className="AC">Namaste!</h1> */}
     <br></br>
     <br></br>
     <img className="tow" style={{width:600,height:600}} src="https://www.arlo.co/wp-content/uploads/2021/04/Event-management-700px.png"></img>
     </div> 
     <div>
       <br></br>
       <br></br>
       
     <section className="about-section">
     <div className="cntainer">
       <div className="about-content">
         <h2 style={{textAlign:'center'}}className="af">Welcome to EVENTO!!</h2>
         <h2 style={{textAlign:'center'}}></h2>
       <p style={{textAlign:'center',fontStyle:'letter-spacing:0.08em',marginTop:40,fontSize:'20px',justifyContent:'space-between',marginRight:50}}>
       At Evento we bring your events to life! Whether you're planning a corporate conference, a grand wedding, a milestone celebration, or any special occasion, we are here to turn your vision into a spectacular reality.


Our approach is based on the fact that every individual is unique.
       </p>
       </div>
       {/* <div><img className="ry" src="https://pngimg.com/d/yoga_PNG119.png"></img></div> */}
     </div>
   </section>
   </div> 
   </div>
      
            <div style={{ marginTop:90,flexDirection: 'row', display: 'flex', backgroundColor: "#dedede" }}>
  <div>
    <h1 style={{
      marginLeft: 550,
      fontFamily: 'Courier New, monospace', // Change the font to your preference
      textTransform: 'capitalize',
      fontWeight: 'bolder',
      animation: 'fadeInLeft 1s ease-in-out' // Add a fadeInLeft animation
    }}></h1>
  </div>


 
</div>
            <div >
                <div>
             <h1 style={{textAlign:'center',marginTop:150}}>Events</h1>
             </div>
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
                <button onClick={handleChange}>
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
             <img src="https://advitya.vitbhopal.ac.in/images/tech.png" height="400" />
             {/* <img src="" height="400" /> */}
             </div><Panel header="Technical Events">
        
      <p style={{flexGrow:1}}>
        <small>
          {/* A suite of React components, sensible UI design, and a friendly development experience. */}
        </small>
      </p>
       
           </Panel>
          </Panel>
    
          </button>
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:100}}>
      <button ><Link to='/others'>
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
    <img src="https://advitya.vitbhopal.ac.in/images/non%20tech.png" height="400" width="400"/>
        <Panel header="Non-Technical Evevnts">
      <p>
        <small>
          
        </small>
      </p>
          </Panel>
            </Panel>
          </Link>
            </button>
            </div>
            </div>
           
            </div>
            </div>
       
        </>
    )
}