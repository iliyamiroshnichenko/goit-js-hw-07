/* События input и change
 * Чекбоксы и свойство checked
 */

const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button span");
const licenseRef = document.querySelector(".js-license");
const btnRef = document.querySelector(".js-button");

const handleInputFocus = (e) => console.log("Получил фокус");
const handleInputBlur = (e) => console.log("Потерял фокус");
const handleInputChange = (e) => (nameLabelRef.textContent = e.target.value);
const handleLicenseChecked = (e) => (btnRef.disabled = !e.target.checked);

inputRef.addEventListener("input", handleInputChange);
licenseRef.addEventListener("change", handleLicenseChecked);
inputRef.addEventListener("focus", handleInputFocus);
inputRef.addEventListener("blur", handleInputBlur);
