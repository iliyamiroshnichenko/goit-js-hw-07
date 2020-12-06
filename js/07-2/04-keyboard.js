/* Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства объекта события клавитуры
 */

const outputRef = document.querySelector(".js-output");
const clearBtnRef = document.querySelector('.js-clear');
 
window.addEventListener("keypress", onKeyPress);
clearBtnRef.addEventListener("click", onClearOutput);

function onKeyPress(e) {
  // console.log('event key: ', e.key);
  // console.log('event code: ', e.code);
  outputRef.textContent += e.key;
}
function onClearOutput(e){
    outputRef.textContent = "";
}

