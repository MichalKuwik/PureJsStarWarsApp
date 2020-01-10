import startWarsmp3 from '../mp3/sound.mp3';
import play_arrow from '../img/play-arrow.png';
import pause_arrow from '../img/pause-arrow.png';

const volueLevel = document.querySelector('.volume-level');
const mutedSvg = document.getElementById('muted');
const svg = document.getElementById('svg');
mutedSvg.style.display = "none";
mutedSvg.style.width = "30px";
mutedSvg.style.height = "30px";

export const initAudioPlayer = () => {
  const audio = new Audio();
  audio.src= startWarsmp3;
  audio.loop = true;
  audio.play();
  
  //dom el
  const musicBtn = document.getElementById('play_stop_btn');
  const volumeSlider = document.getElementById('volume-slider');

  //event literner
  musicBtn.addEventListener('click',play_pause_fn);
  volumeSlider.addEventListener('mousemove', setvolume);

  const changeImgInBtn = (img) => {
    musicBtn.style.background = `url(${img}) center center no-repeat`;
    musicBtn.style.backgroundSize = '85%';
  }

  changeImgInBtn(play_arrow)

  //play_pause_fn
  function play_pause_fn(){
    if(audio.paused){
      audio.play();
      changeImgInBtn(play_arrow);
      mutedSvg.style.display = 'none';
      svg.style.display = 'block';
    } else {
      audio.pause();
      changeImgInBtn(pause_arrow);
      mutedSvg.style.display = 'block'
      svg.style.display = 'none';
      console.log('end')
    }
  }
  function setvolume(){
    audio.volume = volumeSlider.value / 100;
    console.log(volumeSlider.value);
    volueLevel.textContent = volumeSlider.value;
    volueLevel.style.color = 'red';
  }
}



