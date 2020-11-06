import React from 'react';
import{FacebookShareButton,WhatsappShareButton,TwitterShareButton,FacebookIcon,WhatsappIcon,TwitterIcon} from 'react-share'
import './App.css'
import ReactAudioPlayer from 'react-audio-player'; 
import audio from './videos/demo.mp3' 
function App(){
    return(<div className="Full-box">
    <center>
    <p id="time"></p>
        <h2>Wish you a Happy Dussehra!</h2>
        <div>
      <a href='https://www.twitter.com/iharicharan' className='twitter-icon'><i className='fa fa-twitter'>Follow @HariCharan</i></a>
</div>
        <ReactAudioPlayer src={audio} autoPlay loop/>
          
        <p className='share-buttons1'>Share On</p> 
     <div className='share-buttons'> 
<FacebookShareButton url="https://dussehrawishes1.web.app" quote="May all the tensions in your life burn along with the effigy of Demon.May this Dasara,light up the hopes of Happy times,And dreams for a year full of smiles!Happy Dussehra!" className='icon'>
     <FacebookIcon size={40} square='true'/>
</FacebookShareButton>
<WhatsappShareButton url="*May all the tensions in your life burn along with the effigy of Demon.May this Dasara,light up the hopes of Happy times,And dreams for a year full of smiles!Happy Dussehra!*.👉 https://dussehrawishes1.web.app" className='icon' >
<WhatsappIcon size={40} square='true'/>
</WhatsappShareButton>
<TwitterShareButton url="May all the tensions in your life burn along with the effigy of Demon.May this Dasara,light up the hopes of Happy times,And dreams for a year full of smiles!Happy Dussehra!.👉 https://dussehrawishes1.web.app"  className='icon'>
<TwitterIcon size={40} square='true'/>
</TwitterShareButton>

</div>

<h3 id='flex-grid'>Wish you a Happy Dussehra! Just like the colours and lights of the festival, may your life be filled with all the joy and prosperity in the world. 
Happy Dussehra and Vijayadashami to you!</h3>
       
</center>
  </div>
  );
}
export default App

