if (6 === 6){
    console.log("Verdadeiro");
}

if(6 === 7){
    console.log("Ele nem entra.")
}
else{
    console.log("Falso")
}

const idade = prompt("Informe sua idade")
if (idade >= 18){
    alert("Voce e maior de idade")
}
else if (idade >= 12){
    alert("Menor de idade!")
}
else if (idade <= 11){
        alert("voce é uma crianca")
}

const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

alert(resultado)