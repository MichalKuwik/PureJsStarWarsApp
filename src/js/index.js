//1 Get DOM elements
const searchForm = document.getElementById('search-form');
const searchInput = document.querySelector('.input');
const select = document.getElementById('select');
const result = document.querySelector('.result');

// 2 api base url
const apiBaseUrl = 'https://swapi.co/api';
// 2 get value of selectOptionEl
let searchOption = 'wybierz';

//3 onchange select listener
select.addEventListener('change',(e) => {
  let selectedCategory = e.target.value;
  searchOption = selectedCategory
  console.log(searchOption)
})

//4 serve form submit
searchForm.addEventListener('click',function(e){
  e.preventDefault();
  const searchValue = searchInput.value;
  console.log(searchValue);
})