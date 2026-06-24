let entrada= parseInt(prompt("Ingrese su edad para poder saber si ya puede conducir"))
let edad= parseInt(entrada)

if(isNaN(edad)|| edad<0){
    alert("Error: Por favor, ingresa un número válido y mayor a cero.")
} else if (edad >= 18) {
    alert("¡Ya puedes conducir!");
} else {
    alert("Aún eres menor de edad, no puedes conducir.");
}