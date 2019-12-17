import {selectFunction,searchOption} from './func_select';
import {searchFormFn} from './func_searchForm';
import { TweenMax, TimelineMax}  from 'gsap/all';

searchOption;
//select option function
selectFunction();
//searchFrom function
searchFormFn;

const text = document.querySelector('.header-desc');

const tl = new TimelineMax();

tl.from(text,1,{opacity:0,delay:2})



 

