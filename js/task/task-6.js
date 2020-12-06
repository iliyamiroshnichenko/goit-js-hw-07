/* Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
*/

const inputRef = document.querySelector("#validation-input");
const countOfSymbols = +inputRef.dataset.length;

const setClass = (e) => {
  if (e.target.value.length === countOfSymbols) {
    e.target.classList.contains("invalid")
      ? e.target.classList.replace("invalid", "valid")
      : e.target.classList.add("valid");
  } else {
    e.target.classList.contains("valid")
      ? e.target.classList.replace("valid", "invalid")
      : e.target.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", setClass);
