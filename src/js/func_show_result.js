import genereteView from './func_generate_view';

//get dom element
const resultSection = document.querySelector('.result');

const showResult = (searchOption,results) => {
  let htmlStructure;
  //11
  
  if(searchOption === 'films'){
    //12
    htmlStructure = results.map(result => (
      genereteView(`<p>Title:</p> ${result.title}, <p>Director:</p> ${result.director}`)
    )) 
  }else if(searchOption === 'people'){
    htmlStructure = results.map(result => (
      genereteView(`<p>Name:</p> ${result.name}, <p>Height:</p> ${result.height}`)
    ))
  }

  resultSection.innerHTML = htmlStructure.join('');
}

export default showResult;