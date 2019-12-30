import {searchInput} from './func_searchForm';
// import {disapear,apear} from './disaper_apear_functions';
//dom el
const warning = document.querySelector('.info-walidation');

export let validateFlag = true;
  //new walidation
  export function check(){

    const inputValue = searchInput.value.trim();

    const messages = [];
    if(inputValue === '' || inputValue === null){
        messages.push('Proszę wpisać wyraz,literę lub cyfrę!');
        warning.innerHTML = messages;
        validateFlag = false;
        disapear();
        
    }if(inputValue !== ''){
        messages.push('')
        warning.innerHTML = messages;
        validateFlag = true;
        apear();
    }
  }