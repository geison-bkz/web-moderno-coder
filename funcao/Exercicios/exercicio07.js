function bhaskara(ax2, bx, c) {
  const x = [];
  const delta = Math.pow(bx, 2) - 4 * ax2 * c;
  if (delta < 0) {
    return 'Delta é negativo';
  } else {
    x[0] = (-1 * bx + Math.sqrt(delta)) / (2 * ax2);
    x[1] = (-1 * bx - Math.sqrt(delta)) / (2 * ax2);

    return `x' = ${x[0]} \nx" = ${x[1]}`;
  }
}

console.log(bhaskara(1, 12, -13));
