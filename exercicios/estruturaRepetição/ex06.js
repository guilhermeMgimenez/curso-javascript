function Multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 * n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}
function Dividir(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 / n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}
function Somar(){
    let n1 = document.querySelector("#n1").value
    n1 = parseFloat(n1)
    let n2 = document.querySelector("#n2").value
    n2 = parseFloat(n2)
    let resultado = n1 + n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}
function Subtrair(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 - n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}