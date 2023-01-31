// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.

function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  if (this.a === this.b && this.a === this.c && this.a === this.d) {
    return true;
  } else return false;
};

const form = new Square(5, 2, 1, 9);
console.log(form);

console.log(form.isSquare());
