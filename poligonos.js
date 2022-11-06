class Poligono {
  
  constructor(lado1, lado2, lado3, lado4) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
    this.lado4 = lado4;
  }

  perimetro() {
    return (this.lado1 + this.lado2 + this.lado3 + this.lado4);
  }  
}

class Triangulo  extends Poligono{

  constructor(lado1, lado2, lado3) {
    super(lado1, lado2, lado3);
  }

  perimetro() {
    return (this.lado1 + this.lado2 + this.lado3);
  }
}

class Cuadrado extends Poligono {
  constructor(lado1, lado2, lado3, lado4) {
    super(lado1, lado2, lado3, lado4);
  }
  
  perimetro() {
    return super.perimetro();
  }
}

class Rectangulo extends Poligono {
  constructor(lado1, lado2, lado3, lado4) {
    super(lado1, lado2, lado3, lado4);
  }

  perimetro() {
    return super.perimetro();
  }
}

let triangulo = new Triangulo(3,3,3);
console.log(triangulo.perimetro());

let cuadrado = new Cuadrado (5,5,5,5);
console.log(cuadrado.perimetro());

let rectangulo = new Rectangulo (6,6,6,6);
console.log(rectangulo.perimetro());