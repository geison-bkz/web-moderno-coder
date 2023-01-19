const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: 'Geison',
  sobrenome: 'dos Santos',
  idade: 34,
  peso: 62,
};

for (atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
