class Poligono {
  
  #lados

  constructor(...lados) {
    this.#lados = lados;
  }

  perimetro() {
    let perimetro = 0
    for(const lado of this.#lados) perimetro += lado;
    return perimetro;
  }  
}

class Triangulo  extends Poligono{
  constructor(lado1, lado2, lado3) {
    super(lado1, lado2, lado3);
  }
}

class Cuadrado extends Poligono {
  constructor(lado) {
    super(lado, lado, lado, lado);
  }
}

class Rectangulo extends Poligono {
  constructor(lado1, lado2) {
    super(lado1, lado2, lado1, lado2);
  }
}

let cuadrado = new Cuadrado(3);
console.log(cuadrado.perimetro());

let triangulo = new Triangulo(3,3,3);
console.log(triangulo.perimetro());

let rectangulo = new Rectangulo (6,6);
console.log(rectangulo.perimetro());