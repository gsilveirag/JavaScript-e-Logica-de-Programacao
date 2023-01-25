const medida = prompt("Digite o valor em METROS que deseja converter:")
medidaReal = parseFloat(medida)


const escolha = prompt("Para qual unidade de medida deseja converter?" +
"\n1. Milimetro (mm)" +
"\n2. Centimetro (cm)" + 
"\n3. Decimetro (dm)" +
"\n4. Decametro (dam)" +
"\n5. Hectometro (hm)" +
"\n6. Quilometro (km)" )
escolhaReal = parseFloat(escolha)


switch(escolhaReal){
    case 1:{
        alert
        (`${medidaReal*1000} Milimetro(mm)`)
        break
    }
    case 2:{
        alert
        (`${medidaReal*100} Centimetro(cm)`)
        break
    }
    case 3:{
        alert
        (`${medidaReal*10} Decimetro(dm)`)
        break
    }
    case 4:{
        alert
        (`${medidaReal/10} Decametro(dam)`)
        break
    }
    case 5:{
        alert
        (`${medidaReal/100} Hectometro(hm)`)
        break
    }
    case 6:{
        alert
        (`${medidaReal/1000} Quilometro(km)`)
        break
    }
    default :{
        alert
        ("Opcao invalida!")
    }

}