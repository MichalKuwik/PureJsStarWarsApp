import {selectFunction, searchOption} from './func_select';
import {searchFormFn} from './func_searchForm';
import animation, { animSpeaker } from './animations';
import {initAudioPlayer,newObj} from './music';
import {initGlobalStyles} from '../js/globalStyles';

//first animations
animation();
searchOption;
//select option function
selectFunction();
//searchFrom function
searchFormFn;
//init audio controls
initAudioPlayer();
//animate sound speaker
animSpeaker();
//init blobalStyles
initGlobalStyles();






