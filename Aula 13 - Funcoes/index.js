function ola(){
    console.log("Ola, mundo!")
}

ola()

function dobro(x){
    console.log("O dobro de " + x + " é " + (x*2))
}

dobro(5)

function dizerOla(nome){
    console.log("Ola, " + nome + " !")
}

dizerOla("Gustavo")

function soma(a, b){
    console.log("O resultado da soma e " + (a+b))
}

soma(5,5)

function teste(nomes){
    nomes = prompt ("Digite seu nome:")
    alert("Seu nome é: " + nomes)
}

//teste()

function criarUsuario(nome1, email, senha, tipo = "admin"){
    const usuario = {
    nome1,
    email,
    senha,
    tipo
    }

    console.log(usuario)

}

criarUsuario("gustavo", "gustavo@gmail.com", "1234",  )

function calcularMedia(a,b){
    const media = ( a+ b )/ 2
    return media
}

const resultado = calcularMedia(7,2)
console.log(resultado)

function criarProduto(nomeP, precoP){
    const produto = {
        nomeP,
        precoP,
        esotque: 1
    }
    return produto
}

const notebook = criarProduto ("Notebook", 2500)
console.log(notebook)