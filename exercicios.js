//EXERCÍCIO 1 
// Entrada: dois números
// Saída: soma deles
// Exemplo: soma(5, 3) → 8

function soma(a,b){

        return a + b;
} 
console.log("A soma é igual a: " + soma(8,5));

//EXERCÍCIO 2
// Função que recebe número
// Retorna "par" ou "ímpar"

function parOuimpar(num){
    //se o resto da divisão desse número por 2 é igual 0 então o numero é par, caso contrario é impar
    if(num%2 == 0){
        return "par";
    }else{
        return "impar";
    }
}
 console.log("O número é " + parOuimpar(5) );
console.log("O número é " + parOuimpar(4) );

//EXERCÍCIO 3
// maiorTres(10, 5, 8) → 10
function maiorTres(a,b,c){
    return Math.max(a,b,c);
}
console.log( "o maior número é: " + maiorTres(10,5,8));

//EXERCÍCIO 4
// contarCaracteres("hello") → 5
/*
let txt = "hello"
    contarCaracteres = txt.length
console.log(contarCaracteres)*/

function contarCaractere(txts){
    return txts.length;
}
console.log("Contagem de carcteres: " + contarCaractere("oi"));

//EXERCÍCIO 5
// inverter("javascript") → "tpircsaj"
function inverter(txtInverso){
    return [...txtInverso].reverse().join('');
}
console.log("Palavra invertida: " + inverter('lua'));

//EXERCÍCIO 6
// somaArray([1, 2, 3, 4]) → 10
function somaArray(num){
    let tot = 0;
    for (const n of num){
        tot += n;
    }
        return tot
    
}console.log("Soma do Array: " + somaArray([1,2,3,4]))

//EXERCÍCIO 7
// maiorArray([5, 12, 3, 8]) → 12
let maior
function maiorArray(numero){
     let maior = numero[0];
     for (let i = 1; i < numero.length; i++ ){
      if (numero[i] > maior) {
        maior = numero[i]
}             
     } return maior
    
}console.log("Maior número array: " + maiorArray([1,12,8,4,5]))

//EXERCÍCIO 8
// filtrarPares([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
