function graus(){
let grauF = parseFloat(document.querySelector("#grauF").value)
let grauC = ((grauF-32)/1.8)
document.querySelector("#resultado").innerHTML = 'graus celsius:'+ grauC
}