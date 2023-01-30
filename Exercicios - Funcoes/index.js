let pi = 3.14

do {

    const opcao = prompt ("Escolha uma opcao do menu abaixo:\n"
    +"1. Calcule a area do triangulo\n"
    +"2. Calcule a area do retangulo\n"
    +"3. Calcule a area do quadrado\n"
    +"4. Calcule a area do trapezio\n"
    +"5. Calcule a area do circulo\n"
    +"6. Sair\n")

    opcaoReal = parseFloat(opcao)
    
    switch (opcaoReal){
        case 1:
            function areaTriangulo(baseT, alturaT){
                const media = ( baseT * alturaT )/2
                return alert("A area do triangulo é: "+ media)   
            }
            let baseT = parseFloat(prompt ("Digite o valor da Base:"))
            let alturaT = parseFloat( prompt ("Digite o valor da Altura:"))
            areaTriangulo(alturaT,baseT)
            break
        case 2:
            function areaRetangulo(baseR, alturaR){
                const media = ( baseR * alturaR )
                return alert("A area do retangulo é: "+ media)   
            }
            let baseR = parseFloat(prompt ("Digite o valor da Base:"))
            let alturaR = parseFloat( prompt ("Digite o valor da Altura:"))
            areaRetangulo(baseR,alturaR)
            break
        case 3:
            function areaQuadrado(lado){
                const media =  lado * lado
                return alert("A area do triangulo é: "+ media)   
            }
            let lado = parseFloat(prompt ("Digite o valor do lado do quadrado:"))
            areaQuadrado(lado)
            break
        case 4:
            function areaTrapezio(baseMaior ,baseMenor, altura){
                const media = ( baseMaior + baseMenor ) * altura/2
                return alert("A area do triangulo é: "+ media)   
            }
            let baseMaior = parseFloat(prompt ("Digite o valor da Base:"))
            let baseMenor = parseFloat( prompt ("Digite o valor da Altura:"))
            let altura = parseFloat( prompt ("Digite o valor da Altura:"))
            areaTrapezio(baseMaior, baseMenor, altura)
            break
        case 5:
            function areaCirculo(raio){
                const media =  pi * raio * raio
                return alert("A area do circulo é: "+ media)   
            }
            let raio = parseFloat(prompt ("Digite o valor do Raio:"))
            areaCirculo(raio)
            break
        case 6:
            alert("Saindo...")
            break
        default :
            alert("Opcao invalida.")
            break
    }
}while (opcaoReal !== 6){
    alert("Programa Encerrado.")
}