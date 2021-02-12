//Essa função faz add um novo objeto em uma nova classe
//se eu trocasse esse objeto.name por this.name,
//metedo greeting, vai usar o valor do nome passado 

function createNewPerson(name) {
    var objeto = {};
    objeto.name = nome;
    objeto.greeting =  function() {
    alert("Olá I\'m" + objeto.name + '.');

    };
    return objeto;
}

console.log("Construtores e Instâncias");