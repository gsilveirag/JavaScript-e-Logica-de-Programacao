let dinheiro = prompt("Qual e o valor disponivel?")
dinheiro = parseFloat(dinheiro)

do {
    const resultado = prompt(`Saldo em conta R$ ----> ${dinheiro} <----` +
    " \nEscolha uma opcao:"+
    " \n1. Adicionar"+
    " \n2. Remover"+
    " \n3. Encerrar")

    resultadoNumerico = parseFloat(resultado)

    switch (resultadoNumerico){
        case 1 :
            dinheiro += parseFloat(prompt ("Qual valor voce quer ADICIONAR?"))
            break
        case 2 :
            dinheiro -= prompt ("Qual valor voce quer REMOVER?")
            break
        case 3 :
            alert("Encerrando...")
            break  
        default:
            alert("Nenhuma das opcoes")
            break 
        }
}while(resultadoNumerico != 3){
    alert("Programa ENCERRADO!")
}