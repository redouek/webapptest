const urlParams = new URLSearchParams(window.location.search);
const numero1 = parseInt(urlParams.get("numero1"));
const numero2 = parseInt(urlParams.get("numero2"));
const numero3 = parseInt(urlParams.get("numero3"));
const numero4 = parseInt(urlParams.get("numero4"));
const numero5 = parseInt(urlParams.get("numero5"));

const soma = numero1 + numero2 + numero3 + numero4 + numero5;

const resultadoElement = document.getElementById("resultado");

if (soma < 50) {
    resultadoElement.textContent = "Boca seca";
} else {
    resultadoElement.textContent = "Salivação normal";
}
