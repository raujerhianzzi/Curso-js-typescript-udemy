const  numero = Number(prompt('Digite um numero com várias casas décimais usando ponto.:'));
const numeroTitulo = document.getElementById('Numero titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero
texto.innerHTML += `Raiz quadrada: <strong>${numero ** 0.5}</strong> <br />`
texto.innerHTML += `${numero} é intero: ${numero} <br />`
texto.innerHTML += `É NaN: ${numero} <br />`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br />`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br />`
texto.innerHTML += `Com duas casas décimais: ${Math.trunc(2-numero)} <br />`



