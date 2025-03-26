// Comparaciones con booleanos
console.log(false + false); //JavaScript pasa el valor que tiene los booleans false 0 y true 1
console.log(false + true);
console.log(true + true);

// Comparaciones con arrays

//console.log([] === []); la 3 comparativa compara su paso por referencia por lo que aunque son dos arrays vacios, no son iguales
console.log([] + []); //Cuando existe un + el contenido de los arrays se vuelven cadenas de texto
console.log([1, 2] + [3, 4]); //1234
console.log([1] + 1); //trata como dos cadenas de texto 11
console.log([1] - 1); //lo trata como operacion numerica y los resta 0

// Comparaciones con objetos
console.log({} + {}); //objetos toman por cadena de texto
//console.log({} === {}); JavaScript, los objetos son comparados por referencia, no por valor
//console.log([] === {}); son dos objetos diferentes 

// Comparaciones especiales
console.log(null + 1); //al tratarse de una operacion aritmetica se vuelve 1
console.log(undefined + 1); // El valor undefined no tiene una representación numérica válida, por lo que se vuelva NaN
console.log(null == 0); //null tiene una expresion numerica que se puede tomar como 0 por lo que daria true
console.log(null <= 0); //igual asi que true
console.log(undefined == null); //en este seria iguales pero con el === no al no ser del mismo tipo

// Operaciones con NaN
console.log(NaN + 1);//cuaquier operacion con NaN es NaN
console.log(NaN == NaN); //Nan tampoco es igual a si mismo por lo que devuelve false
console.log(NaN === NaN); //false igual 
