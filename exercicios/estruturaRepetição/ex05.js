// let nome = prompt("digite seu nome:")
// while(nome.length <= 3){
//     nome = prompt("digite seu nome:")
// }
// let idade = prompt("digite sua idade:")
// while(idade < 0 || idade > 150){
//     idade = prompt("digite sua idade:")
// }
// let salario = prompt("digite seu salario")
// while(salario <= 0){
//     salario = prompt("digite seu salario")
// }
// let sexo = prompt("digite seu sexo: (F ou M)")
// while(sexo != "F" && sexo != "M"){
//     sexo = prompt("digite seu sexo: (F ou M)")
// }

// let estadoCivil = prompt("digite seu estado civil (s - solteiro, c - casado, v - viúvo, d- divorciado)")
// while(estadoCivil != 's' && estadoCivil != 'c' && estadoCivil != 'v' &&estadoCivil != 'd'){
//     estadoCivil = prompt("digite seu estado civil (s - solteiro, c - casado, v - viúvo, d- divorciado)")
// }
function CadastraCliente(){
    let nome = document.querySelector("#nome").value
    if(nome.length < 3){
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
    }
    
}
