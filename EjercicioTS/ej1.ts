/*# Ejercicio 1, typescript: types e intefaces

1. Crea un objeto `bird` que tenga los siguientes datos: `name, canEat, canDrink, canSleep, canFly`
2. Crea un objero `dog` que tenga los mismos datos que pájaro, pero que a demás tenga: `race, age`
3. Crea los `tipos/interfaces` necesarios para poder trabajar con estos datos en TypeScript.

Ej2
Partiendo del ejercicio 1, haz que la raza (race), solo pueda ser Husky, Labrador, Chucho

Ej3
Partiendo del ejercicio anterior, crea un nuevo objeto llamado cat que solamente tenga name, color, canSleep
Partiendo del ejercicio anterior, crea un nuevo objeto llamado Snake que solamente tenga canEat, canDrink, canSleep
*/

interface  Bird {
    name: string;
    canEat: boolean;
    canDrink: boolean;
    canSleep: boolean;
    canFly: boolean;
}


type Dog  = {
    race: "husky" | "labrador" | "Chucho";
    age: number;
} & Omit<Bird,"canFly">;



type Cat =  {
    color: string
} & Pick<Bird, "name" | "canSleep">;



type Snake = Omit<Bird,"name" | "canFly">;

const bird: Bird = {name:"BirdBlue", canEat: true, canDrink:true, canSleep:true, canFly:true};
const dog: Dog = {name:"Rex", canEat: true, canDrink:true, canSleep:true, race: "Chucho", age: 10};
const cat : Cat = {name: "Pelusa", canSleep: true, color: "naranja"}
const snake: Snake = {canEat: true, canDrink:true, canSleep:true}

console.log(bird)
console.log(dog)
console.log(cat)
console.log(snake)