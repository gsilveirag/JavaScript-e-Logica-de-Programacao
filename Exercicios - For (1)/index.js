let numero = parseFloat(prompt("Digite um numero de 1 ao 20:"))
let impressao = `Tabuada do valor ${numero}\n` 

for (let i = 1; i <=3; i++){
    impressao +=  numero + "x" + i + '=' + (numero * i) + "\n"
}

alert(impressao)