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

//Exercício 4 - Interface Genérica Repositorio<T>

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());

//Exercício 5 - Type Alias RespostaServidor

type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);