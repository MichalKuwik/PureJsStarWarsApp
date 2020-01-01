  //dom el
  const focus_border = document.querySelector('.focus-border');
  const label = document.querySelector('.label');
  const btnSubmit = document.getElementById('sub-btn');
  const select = document.getElementById('select');
  const options = document.querySelectorAll('#select option');
  
  const changeColorError = (color) => {
          focus_border.style.backgroundColor = `${color}`;
          label.style.color = `${color}`;
          btnSubmit.style.borderColor = `${color}`;
          btnSubmit.style.color = `${color}`;
          select.style.borderBottomColor = `${color}`;
          // console.log(options);
          options.forEach(option => {
            option.style.backgroundColor = `${color}`;
          })
  }

  export default changeColorError;