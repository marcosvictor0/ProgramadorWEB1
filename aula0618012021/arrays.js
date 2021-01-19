//Conceitos de Arrays = Matriz
//Indice dos Elementos = 0, 1, 2, 3, 4, 5...
let frutas = ["Manga", "Laranja", "Pêra", "Uva", "Cajú"]
console.log(frutas); // Imprimir o Array
console.log(frutas.length); //Mostra o tamanho do Array
console.log(frutas[2]); // mostra o nome da fruta que esta na posição [2]

//Métodos do Array
frutas.push("Banana"); //Add o nome banana dentro do array
console.log(frutas);
console.log(frutas[5]);

let inicio = frutas.unshift("Maça"); // add outra fruta no inicio do array
console.log(frutas);

let deletultimo = frutas.pop(); // Deleta a ultima fruta do array
console.log(frutas);

let deletinicio = frutas.shift(); // Deleta a primeira fruta do array
console.log(frutas);

//Função forEach, Interação do array: mostra os elementos na sequência
frutas.forEach(item => console.log(item));
frutas.forEach(console.log);

//Faz a interação do seu elemento e o seu índice
frutas.forEach((item, index) =>{
    console.log(item);
    console.log(index);
})

frutas.forEach((item, index) =>{
    //console.log(item);
    console.log(index, item);
})