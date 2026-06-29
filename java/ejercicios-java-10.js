let filas = parseInt(prompt("Número de filas:"));
let columnas = parseInt(prompt("Número de columnas:"));

// 1. Calculamos el total de números que necesitamos
let contador = filas * columnas;
let tabla = "";

// 2. Bucle exterior para las filas
for (let i = 0; i < filas; i++) {
    let filaActual = "";
    
    // 3. Bucle interior para las columnas
    for (let j = 0; j < columnas; j++) {
        filaActual += contador + "\t";
        contador--; // Restamos 1 al contador para el siguiente número
    }

    tabla += filaActual + "\n";
}

console.log(tabla);