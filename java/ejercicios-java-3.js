let cadenaTotal = "";
let continuar; // 1. Declaramos la variable fuera del bucle

do {
    let palabra = prompt("Escribe una palabra:");
    
    if (cadenaTotal === "") {
        cadenaTotal = palabra;
    } else {
        cadenaTotal = cadenaTotal + "-" + palabra;
    }

    // 2. Aquí NO ponemos "let", solo le damos un valor a la variable que ya creamos arriba
    continuar = confirm("¿Quieres añadir otra palabra?"); 

} while (continuar === true); // 3. Ahora el while puede ver perfectamente qué valor tiene

alert("Resultado final: " + cadenaTotal);