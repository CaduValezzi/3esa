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