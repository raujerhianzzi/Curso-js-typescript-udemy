/*
operadores lógicos
&& --> AND --> E --> todas as expressões precisam ser verdadeira para retornar true
|| --> OR --> OU
! --> NOT --> NÃO
 */

const usuario = 'luiz';
const senha = '123456';

const vaiLogar = usuario === 'luiz' && senha === '123456';

console.log(vaiLogar);