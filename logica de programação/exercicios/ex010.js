torra('pão de forma', 10.90, 'Vinicius')
torra('pão integral', 10.90)

function torra(pao, valor, nome = 'Cliente') {
    console.log('Torrada feita', pao);
    console.log('Para', nome);
    console.log('Valor de', valor)
}


//outro jeito// 
console.log('Outro jeito')

function fazerPao(pao, nome='cliente', valor) {
console.log(`${pao} finalizado para ${nome} com o valor de ${valor}`)
}

fazerPao('Pão de forma', undefined ,20.80)