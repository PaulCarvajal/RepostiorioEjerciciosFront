//Ejercicio 2, Hoisting
//Que devuelve por consola cada uno de los siguientes `console.log`

/*
```js
console.log(a);
var a = "hola";
```
*/


/*
```js
console.log(b);
let b = "hola";
```

---

```js
console.log(c);
const c = "hola";
```

---

```js
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}
```

---

```js
function sayBye() {
  console.log("Adios desde sayBye!");
}

sayBye();
```

*/

console.log("a) Undefined")
console.log("b) y c) ReferenceError")
console.log("d) Hola desde sayHi!")
console.log("e) Adios desde sayBye!")
console.log("En caso de d) tambien funciona debido al Hosting que hace que las funciones pueda ser llamadas antes de ser creadas y se ejecutaran con normalidad")