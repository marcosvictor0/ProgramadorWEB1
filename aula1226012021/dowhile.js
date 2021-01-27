//Laço  de repetição do /while
// O bloco é executado uma vez, ele verifica antes se a condição é verdadeira.

/*
Sintaxe:
do {
    codigo em bloco
}
while (condição)
*/

let texto ="";
let i = 10;
do {
    i = i + 1;
    texto = texto + i;
    
}
while ( i < 20);
console.log(texto);