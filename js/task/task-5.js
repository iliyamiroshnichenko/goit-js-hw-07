const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener(
  "input",
  (e) => {
  e.target.value = e.target.value.replace(/\s+/g, " ").replace(/^\s/,'');
    textRef.textContent = e.target.value ? e.target.value : "незнакомец";
  });
