import genereteView from './func_generate_view';
import {reverseData} from './func_select';



const itemDiv = document.querySelectorAll('.item');

//get dom element
const resultSection = document.querySelector('.result');


const showResult = (searchOption,results) => {
  let htmlStructure;
  //11
  
  if(searchOption === 'films'){
    //12
    htmlStructure = results.map(result => (
      genereteView(`<h2>Tytuł:</h2> <p>${result.title}</p>, <h2>Reżyser:</h2> <p>${result.director}</p>, <h2>Data premiery:</h2> <p>${reverseData(result.release_date)}r.</p>`)
    )) 
  }else if(searchOption === 'people'){
    htmlStructure = results.map(result => (
      genereteView(`<h2>Imię i nazwisko:</h2> <p>${result.name}</p>, <h2>Wzrost:</h2> <p>${result.height}cm</p>, <h2>Waga:</h2> <p>${result.mass}kg</p>`)
    ))
    
  }else if(searchOption === 'planets'){
    htmlStructure = results.map(result => (
      genereteView(`<h2>Nazwa:</h2> <p>${result.name}</p>, <h2>Populacja:</h2> <p>${result.population}</p>, <h2>Rodzaj powierzchni:</h2> <p>${result.terrain}</p>`)
    ))
  }else if(searchOption === 'starships'){
    htmlStructure = results.map(result => (
      genereteView(`<h2>Nazwa:</h2> <p>${result.name}</p>, <h2>Model:</h2> <p>${result.model}</p>, <h2>Koszt:</h2> <p>${result.cost_in_credits} kredytów</p>`)
    ))
  }

  resultSection.innerHTML = htmlStructure.join('');
}

export default showResult;