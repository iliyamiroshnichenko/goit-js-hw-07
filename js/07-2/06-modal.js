/*
 *   Открыть и закрыть по кнопке
 *   закрыть по клику на бекдроп
 *   закрыть по ESC
 */

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdropRef = document.querySelector(".js-backdrop");

const onOpenModal = () => {
  window.addEventListener("keydown", onEscPress);
  document.body.classList.add("show-modal");
};
const onCloseModal = () => {
  window.removeEventListener("keydown", onEscPress);
  document.body.classList.remove("show-modal");
};
const onBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
};
const onEscPress = (e) => {
  if (e.code === "Escape") {
    onCloseModal();
  }
};

openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackdropClick);
