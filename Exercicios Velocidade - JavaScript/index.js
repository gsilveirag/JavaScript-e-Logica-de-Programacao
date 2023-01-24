const veiculoUm = prompt ("Digite o nome do PRIMEIRO veiculo: ")
const velocidadeUm = prompt ("Digite a velocidade dele: ")

const veiculoDois = prompt ("Digite o nome do SEGUNDO veiculo: ")
const velocidadeDois = prompt ("Digite a velocidade dele: ")

if (velocidadeUm === velocidadeDois){
    alert(`Os dois veiculos possuem a mesma velocidade que é de ${velocidadeUm}KM`)
}else if (velocidadeUm > velocidadeDois){
    alert(`O veiculo de ${veiculoUm} e mais rapido`)
}else if (velocidadeUm < velocidadeDois){
    alert(`O veiculo de ${veiculoDois} e mais rapido`)
}