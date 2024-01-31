import { Panel } from 'rsuite';
// import "../assets/css/home.css";
import NavigationBar from "../components/navbar";
import { Link, useNavigate } from 'react-router-dom';



export default function Corporate(){
  
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
           
<h1 style={{textAlign:'center',fontSize:90,marginTop:'20px'}}>Corporate Events</h1>
     
            <div >
                <div style={{justifyContent:'space-around',display:'flex',flexDirection:'column',alignItems:'center',padding:100}}>
                <p > 
                Welcome to an evening of fun, camaraderie, and friendly competition at our much-anticipated "Game Night Extravaganza"! Get ready to unwind, unleash your playful spirit, and enjoy a night filled with laughter, strategy, and a touch of friendly rivalry.

Date and Time:
01.02.20204 and 05:30

Venue:
EVENTO Hall
<br></br>

<br></br>

<br></br>


What to Expect:
<br></br>
<br></br>

Diverse Game Zones:
Dive into an array of game zones catering to all tastes and preferences. From classic board games that bring back childhood memories to high-energy video game challenges, there's something for everyone.

Friendly Competitions:
Engage in friendly battles with your colleagues as you compete in various games and activities. From trivia quizzes that test your knowledge to virtual races that get your adrenaline pumping, the night is yours to conquer.

Board Game Bonanza:
Embark on a journey through the world of board games – from intense strategy games that require wit and cunning to light-hearted party games that guarantee laughter. Gather your team, roll the dice, and let the games begin!

Virtual Reality Adventures:
Immerse yourself in a world of virtual reality with cutting-edge VR setups. Whether you're exploring fantastical realms or conquering challenges in a digital space, our VR experiences will transport you to new dimensions of excitement.

Card Game Corner:
Unleash your card shark skills at our dedicated card game corner. Whether it's poker, Uno, or a strategic round of cards against humanity, the possibilities are endless. Gather your luck and strategy for an unforgettable card-playing experience.

Snacks and Refreshments:
Fuel your gaming spirit with a delectable array of snacks and refreshments. Indulge in mouthwatering treats and stay energized throughout the night.

Prizes and Recognition:
Compete for glory and fabulous prizes! Stand a chance to win coveted titles and accolades as you showcase your skills in various games. The night isn't just about playing; it's about celebrating the champions among us.

Networking and Team Building:
Beyond the games, use this opportunity to connect with colleagues on a different level. Strengthen team bonds, foster new friendships, and build lasting memories in a relaxed and enjoyable atmosphere.
                </p>
                 
          
            </div>
            </div>
           
            </div>
            <div>
                <h1 style={{textAlign:'center',marginTop:2}}>Click here for REGISTRATION</h1>
                <button  style={{marginTop:60,marginLeft:650,fontSize:40,marginBottom:40}}><Link to='/info'>CLICK HERE</Link></button>
            </div> 
            
       
        </>
    )
}