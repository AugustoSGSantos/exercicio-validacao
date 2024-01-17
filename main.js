const form = document.getElementById('form-validacao');
const valorA = document.getElementById('campoA');
const valorB = document.getElementById('campoB');
const containerMsgSuccess = document.querySelector('.success-message');
const containerMsgError = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    containerMsgSuccess.style.display = 'none';
    containerMsgError.style.display = 'none';
    valorB.style.border = '';

    const msgValidando = `O valor do Campo B <b>${valorB.value}</b> é maior que o do Campo A <b>${valorA.value}</b>`;

    if (valorB.value > valorA.value) {

        containerMsgSuccess.innerHTML = msgValidando;
        containerMsgSuccess.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    } else {

        valorB.style.border = '1px solid red';
        containerMsgError.innerHTML = 'O valor do Campo B deve ser maior que o do Campo A.';
        containerMsgError.style.display = 'block';
    }
});

valorB.addEventListener('input', function () {
    valorB.style.border = '';
    containerMsgError.style.display = 'none';
});


valorA.addEventListener('input', function () {
    containerMsgSuccess.style.display = 'none';
});

valorB.addEventListener('input', function () {
    containerMsgSuccess.style.display = 'none';
});