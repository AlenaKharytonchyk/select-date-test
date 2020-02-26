const daysSelect = document.querySelector('#days');
const monthsSelect = document.querySelector('#months');
const yearsSelect = document.querySelector('#years');

function init() {
  for (let i = 1; i <= 31; i += 1) {
    const option = setOption(i);
    daysSelect.append(option);
  }
  for (let i = 1; i <= 12; i += 1) {
    const option = setOption(i);
    monthsSelect.append(option);
  }
  const currentYear = 2018;
  for (let i = currentYear - 120; i <= currentYear; i += 1) {
    const option = setOption(i);
    yearsSelect.append(option);
  }
}

function setOption (i) {
  const option = document.createElement('option');
  option.value = i < 10 ? `0${i}` : i;
  option.innerText = option.value;
  return option;
}



const generateDays = () => {
  const year = yearsSelect.value;
  const month = monthsSelect.value;
  if(!year || !month){return}

  daysSelect.innerHTML = '';
  const daysCount = moment(`${year}-${month}`, 'YYYY-MM').daysInMonth();
  for (let i = 1; i <= daysCount; i += 1) {
    const option = setOption(i);

    daysSelect.append(option);
  }
};

document.querySelector('select#months').addEventListener('change', generateDays);
document.querySelector('select#years').addEventListener('change', generateDays);

init();
