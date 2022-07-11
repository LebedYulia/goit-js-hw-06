const inputData = document.querySelector('#validation-input');
const dataLength = inputData.getAttribute('data-length');

inputData.addEventListener('blur', () => {
    if (event.currentTarget.value.length < dataLength) {       
        inputData.classList.add('invalid');        
        console.log(inputData);   

    } if  (event.currentTarget.value.length >= dataLength) {
        inputData.classList.toggle('invalid');          
        inputData.classList.add('valid');
        console.log(inputData);   
    }
})