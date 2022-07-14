const inputData = document.querySelector('#validation-input');
const dataLength = inputData.getAttribute('data-length');

inputData.addEventListener('blur', () => {
    if  (event.currentTarget.value.length == dataLength) {
        inputData.classList.remove('invalid');          
        inputData.classList.add('valid');
        console.log(inputData);   
    }
    else {           
        inputData.classList.add('invalid');        
        console.log(inputData);
    } 
})