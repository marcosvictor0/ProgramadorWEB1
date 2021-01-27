//Declaração em bloco
/*
var n = 7;
console.log(n);

var n = 10;
console.log(n);

var n = 20;
console.log(n)
*/

//declaração em bloco
var m = 17; { // Sempre vai pegar o de dentro
    var m = 15;
}

//console.log(m);

let j = 20; { // pega o de dentro quando o console está dentro das {} e pega o de fora se estiver o console fora das {}
    let j = 30;
    console.log(j);
}
console.log(j);

//declaração com constante
const c = 45;
console.log(c); {
    const c = 15;
    console.log(c);
}