let simbolo1 = "R$";
let simbolo2 = "$"
let simbolo3 = "¢"

// escreva a função que receberá um simbolo de moeda
// como parametro e retornará o nome dela caso conheça
// aquele simbolo.
// senão retornar moeda não encontrada
function moeda(simbolo) {
    switch (simbolo) {
        case "R$":
            console.log("real");
            break;
        case "$":
            console.log("Dolar");
            break;
        case "£":
            console.log("Euro");
            break
        default:
            console.log("Não encontrado");
            break;        
    }
}