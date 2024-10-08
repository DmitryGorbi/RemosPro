const form = document.querySelector('.calc-simple');
const percentInput = form.querySelector('.input--percent');
const creditInput = form.querySelector('.input--credit');
const monthInput = form.querySelector('.input--month');
const outputCommonPayment = form.querySelector('.output--payment');
const outputDebtPayment = form.querySelector('.output--debt');
const outputPercentPayment = form.querySelector('.output--percent');

const calc = () => {
  let monthPercent = percentInput.value / 100 / 12; // Процент в месяц
  let commonPercent = (1 + monthPercent) ** monthInput.value; // Общий процент
  let monthPayment = (creditInput.value * monthPercent * commonPercent) / (commonPercent - 1);
  let percentPayment = creditInput.value * monthPercent;
  let debtPayment = monthPayment - percentPayment;
  outputCommonPayment.value = monthPayment.toFixed(0) + ' ₽';
  outputDebtPayment.value = debtPayment.toFixed(0) + ' ₽';
  outputPercentPayment.value = percentPayment.toFixed(0) + ' ₽';
};

calc();

form.addEventListener('input', () => {
  calc();
});

/**
 * Делит число на разряды разделителем
 * http://stackoverflow.com/a/16637170
 * @param x - число
 * @param del - разделитель
 * @returns {string}
 */
// function divideNumberByPieces(x, delimiter) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter || ' ');
// }

// document.getElementById('a').innerHTML = divideNumberByPieces(30245, '-');
// document.getElementById('b').innerHTML = divideNumberByPieces(12353423);
// document.getElementById('c').innerHTML = divideNumberByPieces(42);

// const scrollElement = document.querySelector('.input-range__control');

// let dragging = false;

// scrollElement.addEventListener('mousedown', (e) => {
//   dragging = true;

//   const style = window.getComputedStyle(scrollElement);
//   const transform = new DOMMatrixReadOnly(style.transform);
//   console.log(transform);
// });
alert(undefined == NaN);
