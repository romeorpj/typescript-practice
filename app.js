// typescript arrays and objects
// better practice is to let typescript infer types on its own
var person = {
    name: "Richard",
    age: 30,
    hobbies: ["basketball", "tennis", "hockey"]
};
// But if you want to get extremely detailed, you can notate the expected types yourself
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Richard",
//     age: 30
// }
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
console.log(person.name);
