import '../scss/index';
import bgImg from '../img/1.jpg';

export const initGlobalStyles = () => {
  //dom el
  const body = document.body;
  const bStyle = body.style;
  bStyle.backgroundImage = `url(${bgImg})`;
  bStyle.overflowX = 'hidden';
  bStyle.backgroundColor = '#000';
  bStyle.minHeigh = '70vh';
  bStyle.visibility = 'hidden';
  bStyle.fontFamily = 'Poppins';
}

//colors object
const colors = {
  red: '#B80F0A',
  blue: '#2895da',
  yellow: '#e4b201',
  black: '#000',
  white:'#fff',
  grey: '#ccc'
}
//export destruct obj
export const 
{
  red,
  blue,
  yellow,
  black,
  white,
  grey
} = colors;
