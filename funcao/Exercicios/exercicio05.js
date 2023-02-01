function mostrarValorEmReais(valor) {
  const formatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return formatado;
}

console.log(mostrarValorEmReais(0.30000000000000004));
