const nome = 'Rauje';
const sobrenome = 'Rhianzzi';
const idade = 42;
const peso = 87;
const auturaEmM = 1.82;

let imc;
let anoNascimento;

imc = peso / (auturaEmM * auturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg.`);
console.log(`Tem uma altura de ${auturaEmM} e seu IMC é ${imc}`)
console.log(`${nome} ${sobrenome} Nasceu em ${anoNascimento}.`)