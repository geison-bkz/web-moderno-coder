const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
];

const produtoFragil = (e) => e.fragil;
const produtoCaro = (e) => e.preco >= 500;

console.log(produtos.filter(produtoFragil).filter(produtoCaro));
