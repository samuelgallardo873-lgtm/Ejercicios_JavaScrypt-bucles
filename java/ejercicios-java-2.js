let nota = parseInt(prompt("Ingrese su nota de examen"))
while (isNaN(nota) || nota < 0 || nota > 10) {
    if (isNaN(nota)) {
        alert("Introduce un numero valido")
        nota = parseInt(prompt("Ingrese su nota de examen"))
    } else {
        alert("Numero invalido")
        nota = parseInt(prompt("Ingrese su nota de examen"))
    }
}
if (nota<=2){
    alert(nota + ": Muy deficiente")
}else if ( nota<=4){
    alert( nota + ": Insuficiente")
}else if ( nota <=6){
    alert( nota + ": Suficiente")
}else if (nota=== 7){
    alert( nota + ": Bien")
} else if (nota <= 9){
    alert( nota + ": Notable")
} else {
    alert ( nota + ": Sobresaliente")
}