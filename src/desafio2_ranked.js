let vitorias = 50
let derrotas = 19

function calculaSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}
function verificaRank(saldoVitorias) {
    let rank = "Fora de escopo."
    if(saldoVitorias <= 10){
        rank = "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        rank = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        rank = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        rank = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        rank = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        rank = "Lendário"
    } else if (saldoVitorias >= 101) {
        rank = "Imortal"
    }
    return rank
}

function exibeRankHeroi(saldoVitorias, rank) {
    console.log(`O Herói tem o saldo de ${saldoVitorias} vitórias e está no Rank ${rank}.`)
}

exibeRankHeroi(calculaSaldo(vitorias, derrotas), verificaRank(calculaSaldo(vitorias, derrotas)))
