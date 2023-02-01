function aplicaJurosSimples(capital = 0, taxa = 0, tempo = 0) {
  const montante = capital * taxa * tempo + capital;
  return montante.toFixed(2);
}

console.log(aplicaJurosSimples(10000, 0.1, 5));

function aplicaJurosComposto(capital = 0, taxa = 0, tempo = 0) {
  const montante = capital * Math.pow(1 + taxa, tempo);
  return montante.toFixed(2);
}

console.log(aplicaJurosComposto(10000, 0.1, 5));
