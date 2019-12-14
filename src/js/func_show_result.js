import genereteView from './func_generate_view';
import {reverseData} from './func_select';

//get dom element
const resultSection = document.querySelector('.result');

const showResult = (searchOption,results) => {
  let htmlStructure;
  //11
  
  if(searchOption === 'films'){
    //12
    htmlStructure = results.map(result => (
      genereteView(`<b>Tytuł:</b> ${result.title}, <b>Reżyser:</b> ${result.director}, <b>Data premiery:</b> ${reverseData(result.release_date)}r.`)
    )) 
  }else if(searchOption === 'people'){
    htmlStructure = results.map(result => (
      genereteView(`<b>Imię i nazwisko:</b> ${result.name}, <b>Wzrost:</b> ${result.height}cm, <b>Waga:</b> ${result.mass}kg`)
    ))
  }else if(searchOption === 'planets'){
    htmlStructure = results.map(result => (
      genereteView(`<b>Nazwa:</b> ${result.name}, <b>Populacja:</b> ${result.population}, <b>Rodzaj powierzchni:<b/> ${result.terrain}`)
    ))
  }else if(searchOption === 'starships'){
    htmlStructure = results.map(result => (
      genereteView(`<b>Nazwa:</b> ${result.name}, <b>Model:</b> ${result.model}, <b>Koszt: ${result.cost_in_credits} kredytów</b>`)
    ))
  }

  resultSection.innerHTML = htmlStructure.join('');
}

export default showResult;