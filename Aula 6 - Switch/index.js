// COM LETRAS
const opcao = prompt("Escolha uma opcao: \nA \nB  \nC")

switch (opcao){
    case "A" :
        alert("O resultado e A")
        break
    case "B" :
        alert("O resultado e B")
        break
    case "C" :
        alert("O resultado e C")
        break   
    default:
        alert("Nenhuma das opcoes")
        break 
}

// COM NUMEROS
const resultado = prompt("Escolha uma opcao: \n1 \n2  \n3")

resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico){
    case 1 :
        alert("O resultado e 1")
        break
    case 2 :
        alert("O resultado e 2")
        break
    case 3 :
        alert("O resultado e 3")
        break   
    default:
        alert("Nenhuma das opcoes")
        break 
}