//Funções no JS
/*
function funcaoUm(f1, f2) {
    return f1 * f2;
};

document.getElementById("resultado").innerHTML = funcaoUm(10, 9);
*/

//Atribuindo Valores ás variáveis.

/*
let g1 = prompt("Digite um número:")
let g2 = prompt("Digite um número para fazer a multiplicação com o primeiro.")

function funcaoDois(g1, g2) {
    return g1 * g2;
}
document.getElementById("resultado").innerHTML = funcaoDois(g1, g2);
*/

/*
//Converter Fahrenheit em Celsius
let F = prompt("Qual a temperatura em Fahrenheit:", 90)
function funcaoTreis(F) {
    return(5/9) * (F-32);
}
document.getElementById("resultado").innerHTML = funcaoTreis(F);
*/

animal();
function animal() {
    let nomeAnimal = "Gato";
    document.getElementById("resultado").innerHTML = typeof nomeAnimal + " " + nomeAnimal;
}

document.getElementById("resultado").innerHTML = nomeAnimal;