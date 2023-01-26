const lista = []

lista[0] = "Arroz"
lista[1] = "Feijao"
lista[2] = "Batata"

alert(lista)

const nomeArray = ["Gustavo", "Sam", "Diego", "Alessandro", "Debora"]

//Adiciona elementos na primeira e ultima pocisao
nomeArray.push("Ultimo")
nomeArray.unshift("Primeiro")

//Remove elementos no final
const ultimoElemento = nomeArray.pop()
alert(ultimoElemento)

//Remove elementos no inicio
const inicioElemento = nomeArray.shift()
alert(inicioElemento)
alert(nomeArray)

//Pesquisar um elemento
const consulta = nomeArray.includes("Gustavo")
alert(consulta)
const indice = nomeArray.indexOf("Gustavo")
alert(indice)


//Cortar e Concatenar
const cortar = nomeArray.slice(1, 5)
alert (nomeArray)
alert (cortar)

const concaternar = lista.concat(nomeArray, "Rogerio")
alert(concaternar)

//Substituicao de elementos
const substituicao = lista.splice(indice, 1, "Gostosao")
alert(substituicao)
alert(lista)

//Iterar
for (let i = 0; i < lista.length; i++){
    const elemento = lista[i]
    alert(elemento + "se encontra na posicao "+ indice)
}