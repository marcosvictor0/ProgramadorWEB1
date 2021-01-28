// switch

/*
Sintaxe:
switch (expressão) {

    caso 0:
        codigo
    break;

    caso 1:
        codigo
    break;
    ...

    default:
            codigo;// se nenhum caso for atendido
}
*/

tipoUsuario = "Gerente";
    switch(tipoUsuario)
    {
        case "Admin":
            console.log("Seja Bem Vindo Admin");
        break;

        case "Gerente":
            console.log("Seja Bem Vindo Gerente! ");
        break;

        case "Recepcionista":
            console.log("Seja Bem Vindo Recepcionista!");
        break;

        default:
            console.log("Saindo...");

    }