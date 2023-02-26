const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove ultimo elementro da lista
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // remove primeiro elemento da lista
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento na primeiro posição do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array
console.log(algunsPilotos2);
