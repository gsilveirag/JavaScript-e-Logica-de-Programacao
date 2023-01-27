let imoveis = [];

do{

    let escolha = prompt(
    "Imoveis Cadastrados: " + imoveis.length +"\n"+
    "Escolha uma das opcoes abaixo: \n" +
    "1. Cadastrar Imovel.\n"+
    "2. Mostrar Imoveis.\n" +
    "3. Sair.\n"
    )
    escolhaReal = parseFloat(escolha)

    switch (escolhaReal){
        case (1) :
            const imovel = {}
            
            imovel.nome = prompt ("Digite o NOME do proprietario.")
            imovel.quartos = prompt ("Digite a quantidade de QUARTOS.")
            imovel.banheiros = prompt ("Digite a quantidade de BANHEIROS.")
            imovel.garagem = prompt ("Possui GARAGEM?")

            const confirmacao = confirm(
                "Salvar este imovel? \n"+
                "NOME: " +imovel.nome+ "\n"+
                "QUARTOS: " +imovel.quartos+ "\n"+
                "BANHEIROS: "+imovel.banheiros+ "\n"+
                "GARAGEM: " +imovel.garagem +"\n"
            )

            if(confirmacao){
                imoveis.push(imovel)
                alert("Salvo com sucesso.")
            }else{
                alert("Voltando ao menu.")
            }

            break
        case (2) :
            if(imoveis.length === 0){
                alert("Nenhum imovel Cadastrado.")
            }else{
                for(let i = 0; i < imoveis.length; i++){
                    alert("--->Imovel: " + (i+1) + "\n"+
                    "NOME: " + imoveis[i].nome+ "\n"+
                    "QUARTOS: " + imoveis[i].quartos+ "\n"+
                    "BANHEIROS: "+ imoveis[i].banheiros+ "\n"+
                    "GARAGEM: " +imoveis[i].garagem +"\n"
                    )
                }
            }
            break
        case (3) :
            alert("Saindo...")
            break
        default :
            alert("Opção invalida.")
    }

}while( escolhaReal !== 3){
    alert("Programa Finalizado.")
}