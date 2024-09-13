let nomeHeroi = ['batman', 'Capitão América', 'Homem de Ferro', 'Superman', 'Sentinela', 'Jesus'];
let xpHeroi = [3049, 5499, 7054, 8777, 9900, 77777]

for (let i = 0; i < nomeHeroi.length; i++) {
    let nome = nomeHeroi[i]
    let xp = xpHeroi[i]
    let nivel

    if (xp < 1000) {
        nivel = 'Ferro'
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = 'Bronze'
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = 'Prata'
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = 'Ouro'
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = 'Plantina'
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = 'Ascendente'
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = 'Imortal'
    } else if (xp >= 10001) {
        nivel = 'Radiante'
    }
    console.log(`O Heroi de nome ${nome} está no nivel ${nivel}`)
}