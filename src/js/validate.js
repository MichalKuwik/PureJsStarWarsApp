import { searchInput } from './func_searchForm';
import { disapear, apear } from './disaper_apear_functions';
import changeColorError from './changeColorError_fn';
import { searchForm } from './func_searchForm';
import { hideErr, showErr } from './animations';
import {red,yellow} from './globalStyles';
//flag
export let validateFlag = true;

const warning = document.querySelector('.info-walidation');

//new walidation
export function check() {
	const inputValue = searchInput.value.trim();
	const messages = [];

	if (inputValue === '' || inputValue === null) {
		messages.push('Proszę wpisać wyraz,literę lub cyfrę!');
		warning.innerHTML = messages;
		validateFlag = false;
		searchForm.animate(
			[
				// keyframes
				{
					transform: 'translateX(0%)',
				},
				{
					transform: 'translateX(-25%) rotate(-5deg)',
				},
				{
					transform: 'translateX(20%) rotate(3deg)',
				},
				{
					transform: 'translateX(-15%) rotate(-3deg)',
				},
				{
					transform: 'translateX(10%) rotate(2deg)',
				},
				{
					transform: 'translateX(-5%) rotate(-1deg)',
				},
				{
					transform: 'translateX(0%)',
				},
			],
			{
				// timing options
				duration: 1000,
				iterations: 1,
			},
		);
		hideErr();
		changeColorError(`${red}`);
		disapear();
	} else if (inputValue !== '') {
		messages.push('');
		warning.innerHTML = messages;
		validateFlag = true;
		showErr();
		changeColorError(`${yellow}`);
		apear();
	}
}
