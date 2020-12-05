const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener(
  "input",
  () => (textRef.textContent = inputRef.value ? inputRef.value : "незнакомец")
);
