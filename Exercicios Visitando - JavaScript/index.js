const nome = prompt("Informe o seu nome:")
let cidades = ""
let contagem = 0

let continuar = prompt("Voce visitou algumas cidades? (Sim/Nao)")

while (continuar === "Sim"){
    let cidade = prompt("Qual e o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Voce visitou alguma outra cidade? (Sim/Nao)")
}

alert(
    "Turista: " + nome +
    "\nQuantidade de cidadades visitadas: " + contagem +
    "\n Cidades visitadas: "+ cidades
)
