function calcular(a,b, operacao){
    console.log("Realizando uma operacao.")
    const resultado = operacao (a,b)
    return resultado
}

function somar (x,y){
    console.log("Realizando uma soma")
    return(x + y)
}

console.log(calcular(3,5, somar))

console.log( calcular(8,9, function (x,y){
    console.log("Realizando uma subtracao")
    return x-y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const listar = ["Maca", "Banana", "Laranja", "Limao"]

for(let i = 0; i< listar.length; i++){
    exibirElemento(listar[i], i , listar)
}

