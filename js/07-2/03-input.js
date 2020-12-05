/* События input и change
 * Чекбоксы и свойство checked
 */

const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button span");
const licenseRef = document.querySelector(".js-license");
const btnRef = document.querySelector(".js-button");

inputRef.addEventListener("input", (e) => {
  nameLabelRef.textContent = e.target.value;
});

licenseRef.addEventListener('change', e => {
    btnRef.disabled = !e.target.checked;
})