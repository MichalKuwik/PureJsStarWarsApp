
// 2 get value of selectOptionEl
export let searchOption = 'wybierz';

//3 onchange select listener
export const selectFunction = () => select.addEventListener('change',(e) => {
  let selectedCategory = e.target.value;
  searchOption = selectedCategory
  // console.log(searchOption)
})
