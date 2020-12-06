const inputRef = document.querySelector("#validation-input");
const countOfSymbols = +inputRef.dataset.length;

const setClass = (e) => {
  if (e.target.value.length === countOfSymbols) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", setClass);
