import {searchOption} from './func_select';
import showResult from './func_show_result';

//get DOM
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.input');

// 2 api base url
const apiBaseUrl = 'https://swapi.co/api';

//4 serve form submit
 export const searchFormFn = searchForm.addEventListener('submit',function(e){
  e.preventDefault();
  //5
  const searchValue = searchInput.value;
  
  //6 
  // https://swapi.co/api/people/?search=r2
  const apiURL = `${apiBaseUrl}/${searchOption}/?search=${searchValue}`

  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      showResult(searchOption,data.results)
      // console.log(data.results)
    })
    .then(err => console.log(err))
});