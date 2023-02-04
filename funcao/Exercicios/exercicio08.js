const anotacao = '10 20 20 8 25 3 0 30 1';
const anotacaoArray = anotacao.split(' ').map(Number);
let recorde = anotacaoArray[0];
let recordeIndice;
let contaRecord = 0;
let retorno;

anotacaoArray.forEach((valor, indice) => {
  if (valor > recorde) {
    recorde = valor;
    recordeIndice = indice;
    contaRecord++;
  }

  retorno = [contaRecord, recordeIndice];
});

console.log(retorno);
