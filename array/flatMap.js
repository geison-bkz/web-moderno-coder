const escola = [
  {
    nome: 'Tuma M1',
    alunos: [
      {
        nome: 'Gustavo',
        nota: 8.1,
      },
      {
        nome: 'Gustavo',
        nota: 9.3,
      },
    ],
  },
  {
    nome: 'Tuma M2',
    alunos: [
      {
        nome: 'Rebeca',
        nota: 8.9,
      },
      {
        nome: 'Roberto',
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.flatMap(getNotasDaTurma);
console.log(notas1);
