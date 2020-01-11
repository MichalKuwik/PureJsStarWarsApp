import startWarsmp3 from '../mp3/sound.mp3';
import play_arrow from '../img/play-arrow.png';
import pause_arrow from '../img/pause-arrow.png';
import {blue} from './globalStyles';

//Dom elements
const volumeLevel = document.querySelector('.volume-level');
const mutedSvg = document.getElementById('muted');
const svg = document.getElementById('svg');



export const initAudioPlayer = () => {
  const audio = new Audio();
  audio.src= startWarsmp3;
  audio.loop = true;
  audio.play();

  //mutted sound's icon styles
  const mutedStyleObj = mutedSvg.style;
  mutedStyleObj.display = "none";
  mutedStyleObj.width = "40px";
  mutedSvg.style.height = "40px";
  
  //dom el
  const musicBtn = document.getElementById('play_stop_btn');
  const volumeSlider = document.getElementById('volume-slider');

  //event literner
  musicBtn.addEventListener('click',play_pause_fn);
  volumeSlider.addEventListener('mousemove', setvolume);

  const changeImgInBtn = (img) => {
    const musicStyleObj = musicBtn.style;
    musicStyleObj.background = `url(${img}) center center no-repeat`;
    musicStyleObj.backgroundSize = '85%';
  }

  changeImgInBtn(play_arrow)

  //play_pause_fn
  function play_pause_fn(){
    if(audio.paused){
      audio.play();
      changeImgInBtn(play_arrow);
      mutedSvg.style.display = 'none';
      svg.style.display = 'block';
      volumeLevel.textContent = volumeSlider.value;
    } else {
      audio.pause();
      changeImgInBtn(pause_arrow);
      mutedSvg.style.display = 'block'
      svg.style.display = 'none';
      volumeLevel.textContent = 'pauza';
      // console.log('end')
    }
  }
  function setvolume(){
    audio.volume = volumeSlider.value / 100;
    console.log(volumeSlider.value);
    volumeLevel.textContent = volumeSlider.value;
    volumeLevel.style.color = blue;
  }
}



