// Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Reprovado", se a média for menor do que sete;
// A mensagem "Aprovado com Distinção", se a média for igual a dez.

let media1 = 4
let media2 = 3
let media3 = 0
let media4 = 2
let mediaFinal = ((media1 + media2 + media3 + media4)/4)

if (mediaFinal == 10){
    console.log("aprovado com distinção")
}else if(mediaFinal >= 5 && mediaFinal < 10){
    console.log("aprovado")
}else if(mediaFinal < 5){
    console.log("reprovado")
}