for (let i = 1; i <= 30; i++) {
    let fila = ""; // variable que acumula la fila

    for (let repet = 1; repet <= i; repet++) {
        fila += i; // le pego el número i, tantas veces como diga repet
    }
    console.log(fila);
}