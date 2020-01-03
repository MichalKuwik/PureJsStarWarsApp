import {searchOption} from './func_select';
import showResult from './func_show_result';
import {resetInputValue} from './func_select';
import {check} from './validate';
import {validateFlag} from './validate';
//get DOM
export const searchForm = document.getElementById('search-form');
export const searchInput = document.querySelector('.input');

// 2 api base url
const apiBaseUrl = 'https://swapi.co/api';

//4 serve form submit
export const searchFormFn = searchForm.addEventListener('submit', function(e) {
	e.preventDefault();
	//5
	const searchValue = searchInput.value;
	//validation function
	check();
	//6
	// https://swapi.co/api/people/?search=r2
	const apiURL = `${apiBaseUrl}/${searchOption}/?search=${searchValue}`;

	fetch(apiURL)
		.then(res => res.json())
		.then(data => {
			if (validateFlag) return showResult(searchOption, data.results);
		})
		.then(err => console.log(err));

	//after 1s run this function
	setTimeout(resetInputValue, 100);
});
