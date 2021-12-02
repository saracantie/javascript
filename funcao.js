function parimpar(n){
    if(n%2==0){
        return `par`
    }
    else{
        return `impar`
    }
}

console.log(parimpar(223))

//se vc só passa um parametro ou nenhum ele considera zero e nao da erro:
function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(1))