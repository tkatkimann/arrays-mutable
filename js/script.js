"use strict";

/**Mutable og Immutable
 
Mutable objekter: Disse kan ændres efter deres oprettelse. Det betyder, at du kan ændre deres indhold uden at ændre deres identitet. Typiske eksempler på mutable objekter i JavaScript inkluderer objekter og arrays.

Immutable værdier: Disse kan ikke ændres, når de først er blevet oprettet. Primitive værdier som string, number, boolean, null, undefined, og symbol er eksempler på immutable værdier **/


let arr = [1, 2, 3];
arr.push(4); // Tilføjer '4' til arrayet
console.log(arr); // Output: [1, 2, 3, 4]

let obj = { name: "John", age: 25 };
obj.age = 26; // Ændrer 'age' egenskaben
console.log(obj); // Output: { name: "John", age: 26 }
let obj = [
    { 
        name: "Maja",
        age: 25
    },
    { 
        name: "Kim Ann",
        age: 20
    },
    { 
        name: "Sofie",
        age: 23
    }
];


//array med objekt indeni.