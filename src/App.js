import React from 'react';
import imageInSrc from './assets/imageInSrc.png';
import './assets/style.css';
import './App.css';

function App() {
  return (
    
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>  
      <h1 className="title red" style={{whiteSpace: 'pre-line'}}>Your name here</h1>  
      
      <img src={imageInSrc}  width={320} style={{display: 'block'}} /> 
      <img src="/imageInPublic.png"  width={320} />  
    </div>  
    <video width={320} height={240} controls>  
      <source src="/myVideo.mp4" type="video/mp4" /> 
    </video>
  </div>
  );
}

export default App;
