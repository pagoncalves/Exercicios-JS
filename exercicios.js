//EXERCÍCIO 1 
// Entrada: dois números
// Saída: soma deles
// Exemplo: soma(5, 3) → 8

function soma(a,b){

        return a + b;
} 
console.log("A soma é igual a: " + soma(8,5))

//EXERCÍCIO 2
// Função que recebe número
// Retorna "par" ou "ímpar"

function parOuimpar(num){
    //se o resto da divisão desse número por 2 é igual 0 então o numero é par, caso contrario é impar
    if(num%2 == 0){
        return "par"
    }else{
        return "impar"
    }
}
 console.log("O número é " + parOuimpar(5) )
console.log("O número é " + parOuimpar(4) )

//EXERCÍCIO 3
// maiorTres(10, 5, 8) → 10
