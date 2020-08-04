let objetoServidor = {
    acesso : true,
    login: "mundojs",
}

let objetoServidor2 = {
    erro: "Erro ao conectar ao servidor.",
}

function conexaoLogin(respostaDoServidor) {
    switch (respostaDoServidor){
        case "mundojs":
        console.log("Acesso permitido!");
        break;
        default:
        console.log("Acesso Negado!");
        break;
    }
}