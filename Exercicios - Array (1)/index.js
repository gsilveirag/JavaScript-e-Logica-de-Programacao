const listaPaciente = ["Gustavo ", "Alessandro " , "Diego ", "Debora "]

do{
    
    const opcao = prompt("Pacientes na FILA: "+ listaPaciente + "\n"
    +"\n"
    +"Escolha uma opção abaixo: \n" 
    +" 1. Novo Paciente \n" 
    +" 2. Consultar Paciente\n"
    +" 3. Sair\n")

    opcaoReal = parseFloat(opcao)

    switch(opcaoReal){
        case 1 :
            const nomeAdicionar = prompt ("Qual Nome voce quer ADICIONAR?")
            listaPaciente.push(nomeAdicionar)
            break
        case 2 :
            const nomeConsultar = listaPaciente.shift()
            if(nomeConsultar){
                alert (`Paciente a ser contultado: ${nomeConsultar}`)
            }else {
                alert("Paciente nao encontrado.")
            }
            break
        case 3 :
            alert("Encerrando...")
            break  
        default:
            alert("Opção Invalida!")
            break 
    }
} while (opcaoReal !== 3) {
    alert("Programa Encerrado!")
}