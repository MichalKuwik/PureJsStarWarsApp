import genereteView from './func_generate_view';
import showResult from './func_show_result';

//1 Get DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.input');
const select = document.getElementById('select');


// 2 api base url
const apiBaseUrl = 'https://swapi.co/api';
// 2 get value of selectOptionEl
let searchOption = 'wybierz';

//3 onchange select listener
select.addEventListener('change',(e) => {
  let selectedCategory = e.target.value;
  searchOption = selectedCategory
  // console.log(searchOption)
})

//4 serve form submit
searchForm.addEventListener('submit',function(e){
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
})



 

