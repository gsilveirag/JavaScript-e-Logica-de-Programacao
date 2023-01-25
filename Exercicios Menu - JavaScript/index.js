let i = 0

do {
    const resultado = prompt("Escolha uma opcao:"+
    " \n1. Opcao"+
    " \n2. Opcao"+
    " \n3. Opcao"+
    " \n4. Opcao"+
    " \n5. Encerrar")

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
        case 4 :
            alert("O resultado e 4")
            break
        case 5 :
                alert("Encerrando...")
                i++
                break     
        default:
            alert("Nenhuma das opcoes")
            break 
}
}while(i < 0){
    alert("Programa ENCERRADO!")
}