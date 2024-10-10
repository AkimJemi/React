// 1
let greet: (a: string, b: string) => void;


greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action == 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// 3
let logDetails: (obj: { name: string, age: number }) => void;
type person = { name: string, age: number };

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}
greet('KIM', 'Hi')
console.log(calc(1, 4, 'add'))

logDetails({ name: 'kim', age: 10 })