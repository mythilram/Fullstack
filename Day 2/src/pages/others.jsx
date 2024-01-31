import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/navbar';
// import { Style } from '@mui/icons-material';





const footerStyle = {
    backgroundColor: 'grey',
    color: '#fff',
    padding: '2rem 0',
    textAlign: 'center',
  };
function Info() {


  return (
    <>
   {/*  <Nav/> */}
   <NavigationBar/>
    <div>
<br></br>
    <h1 style={{ textAlign: 'center',fontSize:70 ,fontFamily:'bold',color:'black'}}>NON TECHNICAL EVENTS</h1>

    </div>
    <div style={{ display: 'flex', alignItems: 'center' ,marginTop:'80px'}}>
  <div>
    <img
      src="https://img.freepik.com/free-psd/game-night-entertainment-square-flyer_23-2151023716.jpg"
      alt="Yoga"
      style={{ maxWidth: '100%', height: 'auto' ,width:900}}
    />
  </div>
  <div className="homebg" style={{paddingRight:'20px'}}>
   <h1 style={{textAlign:'center',fontSize:40,color:'black' }}> Game Night Extravaganza </h1>
   <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
   Description: Unleash the competitive spirit in your IT team with a Game Night Extravaganza. 
   From classic board games to virtual gaming tournaments, this event encourages camaraderie, laughter, and a bit of healthy competition. 
   It's a fantastic way to relax and build strong team bonds.</p>
   <button style={{marginTop:60,marginLeft:400,fontSize:20}}><Link to='/corporate'>Learn more</Link></button>
  </div>
</div>
<br></br><br></br>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ textAlign: 'left', marginRight: '20px',paddingLeft:'20px'}}>
    <h1 style={{textAlign:'center',color:'black' }}>Escape Room Challenge</h1>
    <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
    Description: Foster teamwork and problem-solving skills through an Escape Room Challenge. 
    Split your IT teams into groups and watch as they work together to solve puzzles and "escape" within a time limit. 
    It's a fun and interactive way to strengthen collaboration and communication.
</p>
<button style={{marginTop:60,marginLeft:400,fontSize:20}}>Learn more</button>
  </div>
  <div>
    <img 
      src='https://media.istockphoto.com/id/874494348/vector/escape-room-vector-icon-badge-illustration-on-dark-background.jpg?s=612x612&w=0&k=20&c=QAoflCI8CC9xRnq4Z3AE8BGwFO1D-9djN89UfA_Rc5E='
      alt='Yoga'
      style={{ maxWidth:'100%', height:'auto' ,width:1100}}
    />
  </div>
</div>
<br></br><br></br>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <div>
    <img
      src="https://ih1.redbubble.net/image.5177666406.8194/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
      alt="Yoga"
      style={{ maxWidth: '100%', height: 'auto' ,width:900}}
    />
  </div>
  <div className="homebg" style={{paddingRight:'20px'}}>
   <h1 style={{textAlign:'center',fontSize:40,color:'black' }}> Outdoor Adventure Retreat </h1>
   <p style={{textAlign:'center',marginTop:'50px',fontSize:18,marginLeft:40,marginRight:20}}>
   Description: Take your IT team on an outdoor adventure retreat, whether it's a weekend camping trip, a hiking excursion, 
   or a team-building ropes course. This event promotes a sense of unity, resilience, 
   and shared experiences outside the office environment.</p>
   <button style={{marginTop:60,marginLeft:400,fontSize:20}}>Learn more</button>
  </div>
</div>
<footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Evento. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
export default Info;