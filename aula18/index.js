function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('rauje', 'rhianzzi', '42');
const pessoa2 = criaPessoa('vania', 'leite', '31');

console.log(pessoa1.nome, pessoa2.nome);