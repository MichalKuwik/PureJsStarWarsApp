import {selectFunction, searchOption} from './func_select';
import {searchFormFn} from './func_searchForm';
import animation from './animations';

//first animations
animation();

searchOption;
//select option function
selectFunction();
//searchFrom function
searchFormFn;


// var audio, playbtn, mutebtn, seekslider, volumeslider, seeking=false, seekto;
function initAudioPlayer(){
	// audio = new Audio();
	// audio.src = "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
	// audio.loop = true;
	// audio.play();
	// Set object references
	// playbtn = document.getElementById("playpausebtn");
	
	// volumeslider = document.getElementById("volumeslider");
	// Add Event Handling
	// playbtn.addEventListener("click",playPause);
	// mutebtn.addEventListener("click", mute);
	// seekslider.addEventListener("mousedown", function(event){ seeking=true; seek(event); });
	// seekslider.addEventListener("mousemove", function(event){ seek(event); });
	// seekslider.addEventListener("mouseup",function(){ seeking=false; });
	// volumeslider.addEventListener("mousemove", setvolume);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
	    }
	}
	// function mute(){
	// 	if(audio.muted){
	// 	    audio.muted = false;
	// 	    mutebtn.style.background = "url(https://image.flaticon.com/icons/svg/204/204287.svg) no-repeat";
	//     } else {
	// 	    audio.muted = true;
	// 	    mutebtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148757.svg) no-repeat";
	//     }
	// }
	// function seek(event){
	//     if(seeking){
	// 	    seekslider.value = event.clientX - seekslider.offsetLeft;
	//         seekto = audio.duration * (seekslider.value / 100);
	//         audio.currentTime = seekto;
	//     }
  //   }
	function setvolume(){
	    audio.volume = volumeslider.value / 100;
    }
}
window.addEventListener("load", initAudioPlayer);


function initializePlayer(){
  const audio = new Audio();
  audio.src= "../mp3/sound.mp3";
  audio.loop = true;
  audio.play();

  //dom el
  const musicBtn = document.getElementById('play_stop_btn');
  const volumeSlider = document.getElementById('volume-slider');

  //event literner
  musicBtn.addEventListener('click',play_pause_fn);
  volumeslider.addEventListener('mousemove', setvolume);

  //play_pause_fn
  function play_pause_fn(){
    if(audio.paused){
      audio.play();
      musicBtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
    } else {
      audio.pause();
      musicBtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
    }
  }
}
