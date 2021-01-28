//Comparação de Switch

/*
let m = 0;
let n = 1;

switch(m)
{
    case 0:
        texto = "Desligado";
    break;

    case 1:
        texto = "Ligado";
    break;

    default:
        texto = "Valores tem que ser 0 ou 1";
}

console.log(texto);
*/

/*
let diasemana = "";
switch (diasemana)
{
    case "Segunda":
        console.log("Hoje é Segunda!")
    break;

    case "Terça":
        console.log("Hoje é Terça!")
    break;
    
    case "Quarta":
        console.log("Hoje é Quarta!")
    break;

    case "Quinta":
        console.log("Hoje é Quinta!")
    break;

    case "Sexta":
        console.log("Hoje é Sexta!")
    break;

    case "Sábado":
        console.log("Hoje é Sábado!")
    break;

    case "Domingo":
        console.log("Hoje é Domingo!")
    break;

    default:
        console.log("esse é um dia que não existe na semana!.");
}

//Imprimir dias úteis e final de semana.
*/

/*
switch(new Date().getDay())
{
    case 0:
        dia = "Domingo"
    break
    case 1:
        dia ="Segunda";
    break
    case 2:
        dia ="Terça";
    break
    case 3:
        dia ="Quarta";
    break
    case 4:
        dia ="Quinta";
    break
    case 5:
         dia = "Sexta";
    break;
    case 6:
        dia = "Sábado";
    break
    default:
        console.log("Algo errado!");
}
console.log(dia);
*/
//w3schools = tem diversos assuntos sobre o JS e 
switch(new Date().getDay())
{

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dia = "Dias da Semana"
    break;
    case 6:
        dia = "Final de Semana"
    case 0:
        dia = "Final de Semana"
    break;
    default:
        console.log("Algo errado!");
}
console.log(dia);