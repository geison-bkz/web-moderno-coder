const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

// Minha resolução
let resultado = carrinho.map((e) => {
  return JSON.parse(e);
});

const preco = (e) => `R$ ${e.preco}`;

resultado = resultado.map(preco);
console.log(resultado);

// Resoluçào da Cod3r
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado2);
