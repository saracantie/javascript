let num = [5,8,2,9,3]

console.log(num)

num.push(7)

console.log(num)

num.length

console.log(`o vetor tem ${num.length} posições`)

num.sort()
console.log(num)

for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

//a nova versao do js tem um for ainda mais simples pra mostrar os elem em array e objects:

for(let pos in num){
    console.log(num[pos])
}

//como buscar valores dentro de vetores:

let posic = num.indexOf(7)
console.log(`o valor 7 esta na posição ${posic}`)

let posi = num.indexOf(4)
if (posi == -1){
    console.log(`o valor não foi encontrado`)
}
else{
console.log(`o valor 4 esta na posição ${posi}`)
}
//posição -1 é pq nao foi encontrado


//objetos:

let amigo = {nome:`josé`, sexo:`M`, peso:85.4, engordar(p){}}
//vc pode nomear as casinhas ao inves de 0 1 2
console.log(amigo)
//da pra colocar funcoes dentro de variaveis!!!