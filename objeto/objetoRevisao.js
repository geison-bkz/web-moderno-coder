const produto = new Object();
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
  modelo: 'A4',
  proprietario: {
    nome: 'Geison',
    idade: 34,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123,
    },
  },
  condutores: [
    {
      nome: 'Geison',
      idade: 34,
    },
    {
      nome: 'Marcia',
      idade: 29,
    },
  ],
  calcularValorSeguro: function () {
    //...
  },
};

carro.proprietario.endereco.numero = 100;
carro['proprietario']['endereco']['logradouro'] = 'Rua Alternativa';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
