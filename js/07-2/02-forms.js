const formRef = document.querySelector('.js-register-form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    // const formElements = event.target.elements;
    // console.dir(formElements.subscription.value);

    const formData = new FormData(event.target);
   
    const submittedData = {};
    formData.forEach((value, key) => {
        console.log('value: ', value);
        console.log('key: ', key);
        submittedData[key] = value;
    });
    console.log(submittedData);
})