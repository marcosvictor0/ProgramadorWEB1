//Operadores de Comparação = Retornar um Booleano
//Operador de igualdade de valores (==)
console.log(20 == 20);
console.log(20 == "20");
console.log(20 == 30);
console.log("--------------");
//Operador de Igualdade de Tipos (===)
console.log("20" === "20");
console.log("20" === 20);
console.log("--------------");
//Operador de comparação de diferente de valor [ != ]
console.log(20 != 20);
console.log(20 != "20");
console.log(10 != 20);
console.log("--------------")
//Operador de diferente de tipo [ !== ]
console.log("20" !== 20);
console.log(15 !== 15);
console.log("--------------");
//Comparações Lógicas (Concatenação)
//Comparação "E" ou "AND" (&&) -- Para ser VERDADEIRO, os 2 "dados" devem ser verdadeiros
let a = 10; b = 20; c = 10;
if (a == 10 && b == 20) {
    console.log("Verdadeiro"); //Comparação de Valor
}
"---------------------------------------------------------"
let d = 5; e = "10";
if (d == 5 && e == 10) {
    console.log("Verdadeiro"); //Comparação de Valor
}
"---------------------------------------------------------"
let f = 10; g = "10";
if (f === 10 && g === "10") {
    console.log("Verdadeiro"); //Comparação de Tipo
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fa = 10; ga = "10";
if (fa != 10 && ga != "10") {
    console.log("Verdadeiro"); //Comparação de Tipo
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
console.log("--------------")
//Comparação "OU" ou "OR" ( || ) = Pelo menos um dos valores tem que ser VERDADEIRO.
let fb = 10; gb = "10";
if (fb == 10 || gb == "10") {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fc = 5; gc = 2;
if (fc == 10 || gc == "10") {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
console.log("------------------")
//Comparação Maior que (>), Menor que (<), Maior ou igual (>=), Menor ou igual (<=)
let fd = 15; gd = 11;
if (fd > gd ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fe = 15; ge = 20;
if (fe > ge ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let ff = 15; gf = 11;
if (ff < gf ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fg = 15; gg = 20;
if (fg < gg ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fh = 15; gh = 20;
if (fh >= gh ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"
let fi = 15; gi = 20;
if (fi <= gi ) {
    console.log("Verdadeiro"); //Comparação de valor
} 
else{
    console.log("False");
};
"---------------------------------------------------------"

//Strings Compostas
let primeiroNome = "Marcos"; segundoNome = "Victor"; Idade = 20;
console.log("Primeiro nome:", primeiroNome,"Segundo Nome:", segundoNome,"Idade", Idade);

let x = "tic";
x = "toc";
x = "toe";
console.log(x);

let xa = "Marcos";
let ya = "Victor";
let za = ya;
ya = xa;
xa = za;
console.log(xa);