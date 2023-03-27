const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const mulherChinesa = (e) => e.genero === 'F' && e.pais === 'China';
const menorSalario = (prev, curr) => {
  return prev.salario < curr.salario ? prev : curr;
};

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const func = funcionarios.filter(mulherChinesa).reduce(menorSalario);
  console.log(func);
});
