const daysSelect = document.querySelector('#days');
const monthsSelect = document.querySelector('#months');
const yearsSelect = document.querySelector('#years');

function init() {
  for (let i = 1; i <= 12; i += 1) {
    const option = setOption(i);
    monthsSelect.append(option);
  }
  const currentYear = 2018;
  for (let i = currentYear - 120; i <= currentYear; i += 1) {
    const option = setOption(i);
    yearsSelect.append(option);
  }
  addResetBtn();
}

function setOption (i) {
  const option = document.createElement('option');
  option.value = i < 10 ? `0${i}` : i;
  option.innerText = option.value;
  return option;
}

function clearSelected(options){
  for(let i = 1; i < options.length; i++){
    options[i].selected = false;
  }
  options[0].selected = true;
}

function addResetBtn() {
  const button = document.createElement('input');
  button.setAttribute('type', 'button');
  button.value = 'Reset';
  button.classList.add('reset-btn');
  document.querySelector('form').append(button);

  button.addEventListener('click', () => {
    clearSelected(monthsSelect.options);
    clearSelected(yearsSelect.options);
    clearSelected(daysSelect.options)}
    );
}

const generateDays = () => {
  const year = yearsSelect.value;
  const month = monthsSelect.value;

  if(!year || !month){return}

  daysSelect.innerHTML = ' <option selected disabled>Select a day...</option>';
  const daysCount = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
  for (let i = 1; i <= daysCount; i += 1) {
    const option = setOption(i);
    daysSelect.append(option);
  }
};

document.querySelector('select#months').addEventListener('change', generateDays);
document.querySelector('select#years').addEventListener('change', generateDays);

init();

