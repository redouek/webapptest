const form = document.querySelector('form');
const respostaElement = document.querySelector('#resposta');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const numero1 = parseInt(document.querySelector('#numero1').value);
    const numero2 = parseInt(document.querySelector('#numero2').value);
    const numero3 = parseInt(document.querySelector('#numero3').value);
    const numero4 = parseInt(document.querySelector('#numero4').value);
    const numero5 = parseInt(document.querySelector('#numero5').value);

    const soma = numero1 + numero2 + numero3 + numero4 + numero5;

    if (soma < 50) {
        respostaElement.textContent = "Boca seca";
    } else {
        respostaElement.textContent = "Salivação normal";
    }
});
