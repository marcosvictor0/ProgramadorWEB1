let a = prompt("Digite o primeiro número:")
let b = prompt("Digite o outro número para fazer a soma:")
function soma1(a, b)
{   
    return a + b;
}

document.getElementById("soma2").innerHTML = soma1(a, b);