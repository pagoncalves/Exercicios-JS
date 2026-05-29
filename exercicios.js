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
/*let txt = "hello"
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
function filtrarPares(nro){
   let par = []
    for (let i= 0; i < nro.length; i++ ){ //i = indice do array e enquanto ele for menor que tamanho do array e auto soma
        if (nro[i]%2 == 0){ //uma condicional para verificar se o resto da divisão do item na indice é igual a 0
          par.push(nro[i]) //se for cria um novo array com os itens do anteriores
        } 
      } return par
    } 
    
 console.log( "Retorna apenas pares do array: " + filtrarPares([2,5,8,12]) )
console.log( "Retorna apenas pares do array: "+ filtrarPares([1,2,5,8,12,42,67,450,61]) )

//EXERCÍCIO 9
// duplicar([1, 2, 3]) → [1, 1, 2, 2, 3, 3]
function duplicar(params) {
    let nArray = []
    for(let i = 0; i < params.length; i++){

       nArray.push(params[i])
        nArray.push(params[i])
           
    } return nArray
}console.log("Elementos do array duplicados: " + duplicar([1,2,1]))

//Exercicio 10
// reverterArray([1, 2, 3]) → [3, 2, 1]
function revers(nroReverso){
    return nroReverso.reverse()
} console.log("Elementos do array reverso: " + revers([1,2,3,4]))

//EXERCÍCIOS EXTRA
//Exercício 16: Média de Array
function mediaArray(som){
    let media = 0
    for(let i = 0; i < som.length;i++){
        media += som[i] 
    } return media/som.length

} console.log("Media entre vetores: " + mediaArray([2,4,6,8]))
console.log("Media entre vetores: " + mediaArray([10,20,30]))
