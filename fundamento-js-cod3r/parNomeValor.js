// par nome/valor
const saudacao = 'opa'; //contexto léxico 1

function exec() {
  const saudacao = 'falaaa'; // contexto léxico 2
  return saudacao;
}

//Objetos são gurpos aninhados de pares nome/valor
const Cliente = {
  nome: 'Geison',
  idade: 34,
  peso: 62,
  endereco: {
    logradouro: 'Rua exemplo',
    numero: 123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(Cliente);
