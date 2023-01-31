function isTriangle(a, b, c) {
  if (a != b && b != c && c != a) {
    return console.log('Escaleno');
  } else if ((a == b && a != c) || (b == c && b != a) || (c == a && c != b)) {
    return console.log('Isósceles');
  } else {
    return console.log('Equilátero');
  }
}

isTriangle(3, 3, 3);
