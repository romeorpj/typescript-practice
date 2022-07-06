// typescript arrays , tiuples , and objects

// Arrays can infer the type by what you put into it. but if i want to let it accept multiple types, i can use type any
// let faveHobbies: any[];


// || Javascript tuples
// works best when you know the size and type of array elements you want to use.



// better practice is to let typescript infer types on its own


enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person = {
    name: "Richard",
    age: 30,
    hobbies: ["basketball", "tennis", "hockey"],
    role: Role.ADMIN
    
}

// But if you want to get extremely detailed, you can notate the expected types yourself

// Using enum



// const person: {
// 	name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
// 	name: "Richard",
// 	age: 30,
//     hobbies: ["basketball", "tennis", "hockey"], // array
//     role: [5, "admin"] //tuple
    
// };
// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase); 
// }

console.log(person.name);

