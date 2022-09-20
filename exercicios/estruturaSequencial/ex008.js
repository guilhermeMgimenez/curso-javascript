salarioHora = 29
totalHoras = 160
salarioBruto = (salarioHora * totalHoras)

console.log("seu salario é R$", salarioBruto.toLocaleString('pt-br',{minimumFractionDigits: 2}))