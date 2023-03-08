const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
];

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));

// Minha resolução
const desafio1 = alunos
  .map((a) => a.bolsista)
  .reduce((valor, valorAtual) => {
    if (valor) return valorAtual;
    return valor;
  });

console.log(`Todos os alunos são bolsistas? ${desafio1 ? 'Sim' : 'Não'}`);

const desafio2 = alunos
  .map((a) => a.bolsista)
  .reduce((valor, valorAtual) => {
    if (valorAtual) return valorAtual;
  });

console.log(`Algum aluno é bolsista? ${desafio2 ? 'Sim' : 'Não'}`);
