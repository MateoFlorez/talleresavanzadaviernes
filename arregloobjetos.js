// let personas = Array(1,2,3,4,5)

let personas = [
    {nombre:"Mateo",edad:23},
    {nombre:"Raquel",edad:23},
    {nombre:"Tommy",edad:3},
    {nombre:"Juan",edad:25},
    {nombre:"Valeria",edad:27}
]

// array metodos
//1. filtrado
let filtrado = personas.filter(persona => persona.edad<20)

console.log(filtrado)

//2. mapeo del arreglo
let mapeado = personas.map(persona => persona.nombre+" En medayork") // Concatenar algo
console.log(mapeado)

//3. forEach (para cada uno)
personas.forEach(persona => persona.nombre = 'nn')
console.log(personas)