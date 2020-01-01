import {searchInput} from './func_searchForm';
import {disapear,apear} from './disaper_apear_functions';
import changeColorError from './changeColorError_fn';
//flag
export let validateFlag = true;

const warning = document.querySelector('.info-walidation');
  //new walidation
  export function check(){
    
    const inputValue = searchInput.value.trim();
    const messages = [];
    
    if(inputValue === '' || inputValue === null){
        messages.push('Proszę wpisać wyraz,literę lub cyfrę!');
        warning.innerHTML = messages;
        validateFlag = false;
        changeColorError('red');
        disapear();
    }else if(inputValue !== ''){
        messages.push('')
        warning.innerHTML = messages;
        validateFlag = true;
        changeColorError('#e4b201');
        apear();
    }
  }

