import genereteView from './func_generate_view';

//get dom element
const resultSection = document.querySelector('.result');

const showResult = (searchOption,results) => {
  let htmlStructure;
  //11
  
  if(searchOption === 'films'){
    //12
    htmlStructure = results.map(result => (
      genereteView(`<b>Title:</b> ${result.title}, <b>Director:</b> ${result.director}`)
    )) 
  }else if(searchOption === 'people'){
    htmlStructure = results.map(result => (
      genereteView(`<b>Name:</b> ${result.name}, <b>Height:</b> ${result.height}`)
    ))
  }

  resultSection.innerHTML = htmlStructure.join('');
}

export default showResult;