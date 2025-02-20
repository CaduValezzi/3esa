//Console.WriteLine("Hello, World!");
using System;

namespace PrimeiroProjeto
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            double n1, n2, res;
            Console.WriteLine("Digite o primeiro numero");
            n1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Digite o segundo numero");
            n2 = Convert.ToDouble(Console.ReadLine());
            res = n1 + n2;
            Console.WriteLine("Soma: {0}", res.ToString());

            //exercicio de conversao dolar para real
            double dolar, real;
            Console.WriteLine("Digite o valor em dolar");
            dolar = Convert.ToDouble(Console.ReadLine());
            real = dolar * 5.7;
            Console.WriteLine("Valor em real: {0}", real.ToString());
        }
    }
}