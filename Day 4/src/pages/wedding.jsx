import { Panel } from 'rsuite';
import "../assets/css/wedding.css";
import NavigationBar from "../components/navbar";
import NavigationBar2 from './eventnav';
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';



export default function Wedding(){




   
    return(
        <>
        <div>
        {/* <div className='home'> */}
        <NavigationBar2/>
       
            {/* </div> */}
              <h1  style={{textAlign:'center'}}>TECHNICAL EVENTS</h1>
     
            <div >
                <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
               
                 
           <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
                <div style={{marginRight:'20px'}}>
                <img src="https://codeheir.com/wp-content/uploads/2019/07/codewars.png" height="400" width='400' style={{borderRadius:1200}}/>
                {/* <img src="" height="400" /> */}
             </div><Panel style={{fontFamily:'bold',fontSize:25,textAlign:'center'}} header ="CodeWars Challenge" >
        
      <p style={{flexGrow:1}}>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
        Description: Engage your development teams in a friendly coding competition. 
        CodeWars Challenge allows participants to solve complex coding problems within a set time frame. 
        It's an excellent opportunity for skill enhancement, teamwork, and showcasing coding prowess.
        </small>
      </p>
       
           </Panel>
          </Panel>
    
         
      <div style={{justifyContent:'space-around',display:'flex',alignItems:'center',padding:50}}>
      
       <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 400,padding:'10px'}}>
        <div style={{marginRight:'20px'}}>
    <img src="https://i0.wp.com/www.htlibrary.org/wp-content/uploads/2021/11/TECH-TALK.png?resize=500%2C318" height="400" width="400" style={{borderRadius:1200}}/>
    </div><Panel style={{fontFamily:'bold',fontSize:25,textAlign:'center'}} header="TechTalk Symposium">
      <p>
        <small style={{fontSize:16,fontFamily:'cursive'}}>
        Description: Foster knowledge-sharing within your IT community. 
        TechTalk Symposium brings together industry experts and professionals to discuss emerging trends, share insights, and explore the latest technologies. 
        A series of interactive sessions and panel discussions ensure a rich learning experience.
        
        </small>
      </p>
          </Panel>
            </Panel>
           
            </div>
            </div>
           
            </div>
            <div>
                <h1 style={{textAlign:'center',marginTop:2}}>Click Below For Registration</h1>
                <button  style={{marginTop:60,marginLeft:650,fontSize:40,marginBottom:40}}><Link to='/info'>CLICK HERE</Link></button>
            </div>  
            </div>
          
        </>
    )
}
