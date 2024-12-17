import './App.css';

import SarkarPoster from "./image/sarkar.jpg"

import Sarkarsong1 from "./audio/Rapta Maara.mp3"
import Sarkarsong2 from "./audio/Top Tucker.mp3"
import Sarkarsong3 from "./audio/Vulikithe Vudhyamam.mp3"

import SarkarTeaser from "./video/SarkarTeaser.mp4"





function App() {
  return (
    <div>

    <div className='bodyBG'>

    <h1 className='mainHeading'>Saaho</h1>
    <div className='movie'>
      <img className='poster' src='https://services.brninfotech.com/tws/media2/posters/saahoPoster.jpg'></img>
    <div className='audio'>
      <h5>1.Pyscho Saiyaan.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Saaho/01 - Pyscho Saiyaan.mp3' controls></audio>
      <h5>2.Ye Chota Nuvvunna.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Saaho/02 - Ye Chota Nuvvunna.mp3' controls></audio>
      <h5>3.Bad Boy.mp3</h5>
      <audio className='audio' src='https://services.brninfotech.com/tws/media2/songs/Saaho/03 - Bad Boy.mp3' controls></audio>
    </div>
      <video className='video' src='https://services.brninfotech.com/tws/media2/trailers/saaho.mp4'controls autoPlay muted></video>
    </div>
    <hr></hr>
    <h1 className='mainHeading'>Kaala</h1>
    <div className='movie'>
      <img className='poster' src='./kaala/kaala.jpg'></img>
    <div className='audio'>
      <h5>1.Onti Thala Raavana.mp3</h5>
      <audio className='audio' src='./kaala/Onti Thala Raavana.mp3' controls></audio>
      <h5>2.Yama Greatu.mp3</h5>
      <audio className='audio' src='./kaala/Yama Greatu.mp3' controls></audio>
      <h5>3.Chittamma.mp3</h5>
      <audio className='audio' src='./kaala/Chittamma.mp3' controls></audio>
    </div>
    <video className='video' src='./kaala/Kaala-Trailer.mp4' controls autoPlay muted></video>
    </div>
    <hr></hr>
    <h1 className='mainHeading'>Sarkar</h1>
    <div className='movie'>
    <img className='poster' src={SarkarPoster}></img>
    <div className='audio'>
    <h5>1.Rapta Maara.mp3</h5>
      <audio className='audio' src={Sarkarsong1} controls></audio>
      <h5>2.Top Tucker.mp3</h5>
      <audio className='audio' src={Sarkarsong2} controls></audio>
      <h5>3.Vulikithe Vudhyamam.mp3</h5>
      <audio className='audio' src={Sarkarsong3} controls></audio> 
    </div>
    <video className='video' src={SarkarTeaser} controls autoPlay muted></video>
    </div>
    </div>

    </div>
  );
}

export default App;
