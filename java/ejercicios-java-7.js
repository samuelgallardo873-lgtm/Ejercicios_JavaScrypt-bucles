let numero = parseInt(prompt("¿De qué tamaño quieres la pirámide inversa?"));

for (let i = numero; i >= 1; i--) {
    let fila = "";
    
    for (let repet = 1; repet <= i; repet++) {
        fila += i;
    }
    
    document.write(fila + "<br>");
}