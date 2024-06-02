let statsHeroi = [["Brimstone", 5001],
                 ["Cypher", 5500],
                 ["Omen", 7323],
                 ["Harbor", 4234],
                 ["Viper", 14000]]

function verificaXP(xp) {
    let nivel = "Fora de escopo."
    if(xp <= 1000){nivel = "Ferro"
    } else if (xp > 1000 && xp <= 2000) {
        nivel = "Bronze"
    } else if (xp > 2000 && xp <= 5000) {
        nivel = "Prata"
    } else if (xp > 5000 && xp <= 7000) {
        nivel = "Ouro"
    } else if (xp > 7000 && xp <= 8000) {
        nivel = "Platina"
    } else if (xp > 8000 && xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp > 9000 && xp <= 10000) {
        nivel = "Imortal"
    } else if (xp > 10000) {
        nivel = "Radiante"
    }
    return nivel
}

function exibeNivelHeroi(heroi, nivel) {
    console.log(`O Herói de nome ${heroi} está no nível ${nivel}.`)
}

function rotina(stats){
    console.log("Desafio Inicial DIO.")
    console.log("Lista de heróis e seus respectivos níveis:")
    for(i = 0; i < stats.length; i++){
        exibeNivelHeroi(stats[i][0], verificaXP(stats[i][1]))
    }
}

rotina(statsHeroi)
