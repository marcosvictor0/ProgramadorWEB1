//Estrutura condicionais 
//if, else, else if
//Bloco = é uma estrutura que sempre é iniciada e finalizada dentro de {} 

/* 
{
    Lista de declarações
}
*/

//Sintaxe:
//if (Condição) afirmação1 else afirmação2

/*if (1 < 2) 
{
    console.log("verdadeiro")
}
*/

/*
if (7 % 2 == 0) 
{
    console.log("Par");
}
*/

/* Estrutura if, else, else if
if (condição) {
    instrução1
}
else if (condição2) {
    instrução2
}
...
else(..) {
    instruçãoN
}
*/

/*
let n1 = 10;
let n2 = 5;

if (n1 > n2)  {
    console.log(n1,"é maior que", n2 );
}
else if (n2 > n1)
{
    console.log(n2,"é maior que",n1);
}
else (n2 < n1)
{
    console.log(n2,"é menor que",n1);
};
*/

let hora = 19;

if (hora <= 12 )
{
    console.log("Bom dia !");
}
else if ( 18 > hora )
{
    console.log("Boa Tarde!");
}
else
{
    console.log("Boa Noite!");
};
