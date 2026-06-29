let sumaTotal = 0; 
let entrada;

do {
    entrada = prompt("Escribe un número:");

    if (entrada !== null) {
        let numero = parseInt(entrada);

        if (isNaN(numero)) {
            alert("Eso no es un número.");
        } else {
            sumaTotal = sumaTotal + numero;
        }
    }
} while (entrada !== null);

// Finalmente, mostramos el resultado
alert("La suma total es: " + sumaTotal);