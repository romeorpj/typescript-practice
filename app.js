"use strict";
exports.__esModule = true;
function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input");
    }
    return n1 + n2;
}
console.log(add("5", 20));
