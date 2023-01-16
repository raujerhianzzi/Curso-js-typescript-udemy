const  numero = Number(prompt('Digite um numero com várias casas décimais usando ponto.:'));
const numeroTitulo = document.getElementById('Numero titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero
texto.innerHTML += `Raiz quadrada: <strong>${numero ** 0.5}</strong> <br />`
texto.innerHTML += `${numero} é intero: <strong>${Number.isInteger(numero)}</strong> <br />`
texto.innerHTML += `É NaN: <strong>${Number.isNaN(numero)}</strong> <br />`
texto.innerHTML += `Arredondando para baixo: <strong>${Math.floor(numero)}</strong> <br />`
texto.innerHTML += `Arredondando para cima: <strong>${Math.ceil(numero)}</strong> <br />`
texto.innerHTML += `Com duas casas décimais: <strong>${numero.toFixed(2)}</strong> <br />`



