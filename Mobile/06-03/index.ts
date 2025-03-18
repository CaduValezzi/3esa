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

//Exercício 3 - Função Genérica inverterArray<T>

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["isso", "é", "um", "teste"];
console.log("Array invertido (números):", inverterArray(numeros)); 
console.log("Array invertido (palavras):", inverterArray(palavras)); 