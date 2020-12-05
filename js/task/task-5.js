const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener(
  "input",
  (e) => (textRef.textContent = e.target.value ? e.target.value : "незнакомец")
);
