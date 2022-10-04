function CalcularSalario(){
    salarioHora = parseFloat(document.querySelector("#salarioHora").value)
    totalHoras = parseFloat(document.querySelector("#totalHorasTrabalhadas").value)
    salarioBruto = (salarioHora * totalHoras)
    salarioBruto = salarioBruto.toLocaleString('pt-br',{minimumFractionDigits: 2})
    document.querySelector("#resultado").innerHTML = 'Salário Bruto : R$'+ salarioBruto +'<br>'
}