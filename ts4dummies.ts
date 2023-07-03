// Variables and Basic Types:

let age: number = 22; // TypeScript infers the type as number
let firstName: string = "Simon"; // TypeScript infers the type as string
let isStudent: boolean = true; // TypeScript infers the type as boolean

// ==============================================================================================

// Arrays and Tuples:
// Array:

let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuple:

let person: [string, number] = ["Alice", 25];

// ==============================================================================================


// Functions:

// Function Declaration and Invocation:
// - Functions are declared using the function keyword, followed by the function name, a 
// set of parentheses for parameters, and curly braces for the function body.

// - Functions can be invoked or called by using the function name followed by parentheses and 
// passing arguments (values) if the function has parameters.

function greet(name: string): void {
    console.log(`Hello, ${name}!`);
}
greet("Alice"); // Output: Hello, Alice!

// Function Parameters:
// - Parameters are placeholders within the function declaration that allow you to accept inputs.
// - Parameters are defined inside the parentheses and can have types specified.

function addNumbers(a: number, b: number): number {
    return a + b;
}
const sum = addNumbers(2, 3); // sum = 5

// Function Return Type:
// - Functions can have a return type specified, which indicates the type of value that the function will return.
// - The return keyword is used to specify the value to be returned.

function multiply(a: number, b: number): number {
    return a * b;
}
const result = multiply(2, 3); // result = 6

// Optional and Default Parameters:
// - Parameters can be made optional by adding a "?" after their name,
// allowing them to be omitted when calling the function.
// - Default parameter values can be assigned to parameters, 
// which are used when the caller doesn't provide a value.

function sayHello(name?: string): void {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello!");
    }
}
sayHello(); // Output: Hello!
sayHello("Alice"); // Output: Hello, Alice!

// Rest Parameters:
// - Rest parameters allow functions to accept an indefinite number of arguments as an array.
// - Rest parameters are denoted by using three dots "..." before the parameter name.

function sumNumbers(...numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
const total = sumNumbers(1, 2, 3, 4); // total = 10

// ==============================================================================================

// Objects and Interfaces:

// Object Declaration and Initialization:
// - Objects are declared using curly braces "{}" and can be assigned to variables.
// - Properties are defined within the object using key-value pairs.

let person1 = {
    name: "Alice",
    age: 25,
};

// Object Properties and Methods:
// - Properties represent the characteristics or attributes of an object.
// - Methods are functions defined within an object and can perform actions or computations.

let person2 = {
    name: "Alice",
    age: 25,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person2.greet(); // Output: Hello, my name is Alice

// Optional Properties:
// - Properties can be marked as optional using the ? symbol,
// allowing them to have an undefined or assigned value.

interface Person {
    name: string;
    age?: number;
}

let person3: Person = {
    name: "Alice",
};

let person4: Person = {
    name: "Bob",
    age: 30,
};

// Readonly Properties:
// - Properties can be marked as "readonly",
// preventing their values from being modified after initialization.

interface Person {
    readonly name: string;
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 25,
};
person.name = "Alicia"; // Error: Cannot assign to 'name' because it is a read-only property.

// Index Signatures:
// - Index signatures allow you to define the types
// for accessing properties dynamically using square brackets.

interface Dictionary {
    [key: string]: string;
}
let dictionary: Dictionary = {
    apple: "A fruit",
    car: "A vehicle",
};
console.log(dictionary.apple); // Output: A fruit

// Interfaces:
// - Interfaces define the structure of an object, specifying property names and their types.
// - They can also include optional and readonly properties, as well as methods.

interface Person {
    name: string;
    age: number;
}
