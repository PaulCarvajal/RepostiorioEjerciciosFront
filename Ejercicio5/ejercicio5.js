/*Sigue los siguientes pasos:

1. **Crea un mapa llamado myMap**
2. **Añade los siguientes key-valor al map**

| Clave    | Valor                 |
| -------- | --------------------- |
| moroso   | user (object)         |
| agarrado | user (object)         |
| generoso | user2 (object)        |
| funcion  | findAnimal (function) |
| color    | color (string)        |

 */


const myMap = new Map();


const user = {
    name: "A",
    last: "si",
    age: 30
}

const secondUser = {
    name: "A",
    last: "si",
    age: 30
}


myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", secondUser);
myMap.set("funcion", findAnimal());
myMap.set("color", "Azul");



function findAnimal(){

}

//3. **Muestra por consola todo el map**
console.log(myMap)


console.log("=============================")

//4. **Muestra por consola el key `moroso`**
for (const [clave, valor] of myMap) {
    if (clave === "moroso") {
        console.log(`Clave: ${clave}, Valor:`, valor);
    }
}


console.log("=============================")

//5. **Comprueba si existe la key `hola`**
if (myMap.has("hola")) {
    console.log("hola exists in the map");
  }
console.log("hola not exists in the map")


console.log("=============================")
//6. **Muestra por consola el tamaño total del map**
console.log(myMap.size)


console.log("=============================")

//7. **Recorre el map con un forEach**
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`)
});

//8. **Elimina el elemento `agarrado` del map**
console.log("=============================")
myMap.delete("agarrado")

console.log("=============================")

//9. **Limpia el mapa por completo**
myMap.clear()


