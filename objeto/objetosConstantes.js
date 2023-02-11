const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa = { nome: 'Ana' }; Não da pra atribuir um novo objeto para a mesma constante.

Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
