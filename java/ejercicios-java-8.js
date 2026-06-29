let limite = parseInt(prompt("Introduce un número (máximo 50):"));

if (limite > 50 || limite < 1 || isNaN(limite)) {
    alert("Número no válido");
} else {
    for (let i = 1; i <= limite; i++) {
        let fila = "";
        for (let j = 1; j <= i; j++) {
            fila += j;
        }
        console.log(fila); 
    }
}