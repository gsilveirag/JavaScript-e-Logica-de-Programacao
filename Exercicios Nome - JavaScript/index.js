let primeiroNome = window.prompt ("Insira o seu Nome:")
let segundoNome = window.prompt ("Insira o Sobrenome:")
let estudos = window.prompt ("Sobre o que voce estuda?")
var data = window.prompt ("Digita o ano de Nascimento:")

console.log(primeiroNome + " " + segundoNome)
console.log(estudos)
console.log(2023 - data + " anos")

window.alert(`Bem vindo:  ${primeiroNome} ${segundoNome}`)
window.alert(`Parabens por estudar:  ${estudos}`)
window.alert(`Vote tem:  ${2023 - data} anos`)