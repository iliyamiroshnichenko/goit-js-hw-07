const formRef = document.querySelector('.js-register-form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Submit!");
})