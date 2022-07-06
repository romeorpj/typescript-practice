import { error } from "console";

function add (n1: number, n2: number) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input"); 
    }
    return n1 + n2;
}

console.log(add(5,20));

// ts types are lowercase
// string, number, boolean, object, array, tuple, enum, any 