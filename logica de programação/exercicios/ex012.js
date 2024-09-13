let username =getfistname('Felipe Andre Pedro', ' ',);
console.log('Hello ' + username)
let userNamesegond =getfistname('Vinicius_Henrique_da_gama_moreira', '_',) 
console.log('Hello ' + userNamesegond)

function getfistname(name,splitChar){
    let username = name.split(splitChar)[0]
    return username
}