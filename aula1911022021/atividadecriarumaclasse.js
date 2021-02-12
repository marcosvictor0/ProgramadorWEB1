var notebook = {
    modelo: "Vaio", 
    cor: "Preto", 
    tela: "HD Antirreflexiva",
    Processador: "Core i3",
    memória: "4G", 
    Armazenamento: "1TB",
function () {
    return this.modelo + " " + this.memória;
}};

console.log("Rodando Perfeito");
