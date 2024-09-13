
let vitorias = 1240
let derrotas = 100
let nivel

function saldo(venceu, perdeu) {
    let saldo = venceu - perdeu
    return saldo
}
let saldoVitoria = saldo(vitorias, derrotas);

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal
if (saldoVitoria <= 10) {
    nivel = 'Ferro'
} else if (saldoVitoria >= 11 && saldoVitoria <= 20) {
    nivel = 'Bronze'
} else if (saldoVitoria >= 21 && saldoVitoria <= 50) {
    nivel = 'Prata'
} else if (saldoVitoria >= 51 && saldoVitoria <= 80) {
    nivel = 'Ouro'
} else if (saldoVitoria >= 81 && saldoVitoria <= 90){
    nivel = 'Diamante'
}else if (saldoVitoria >=91 && saldoVitoria <=100){
    nivel = 'lendario'
}else if (saldoVitoria >=101){
    nivel = 'Imortal'
}
console.log(`O Heroi tem um saldo de vitoria de ${saldoVitoria} e está no nivel ${nivel}`)