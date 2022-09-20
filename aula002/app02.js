// operdores logicos

// && --> e(and)
// || --> operador ou (or)
// ! --> operador não (not)

let n1 = 10
let n2 = 5
let n3 = 20
console.log(n1 > n2)
console.log(!(n1 > n2))

console.log(n1 > n2 && n1 < n3)
console.log(n1 > n2 || n1 > n3)

//operador && avalia todas as operações, se uma for falsa o resultado sera falso.
//operador || avalia todas as operações, se uma for true o resultado sera true.
