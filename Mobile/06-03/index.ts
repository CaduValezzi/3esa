//Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano : number;
    motor?: string;
}

const carro1: Carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2008,
    motor: "firefly"
};

console.log("Carro 1:", carro1);

//Exercício 2 - Interface para Multiplicação 
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 2 x 8:", multiplicar(2, 8));
console.log("Multiplicação 3 x 4:", multiplicar(3, 4)); 