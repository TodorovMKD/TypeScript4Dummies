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

// ==============================================================================================

// Classes and Inheritance:

// Class Declaration:
// - Classes are declared using the class keyword followed by the class name.
// The body of the class is defined within curly braces "{}".

class Person {
    // Class members will be defined here
}

// Constructors and Initialization:
// - Constructors are special methods used for initializing class instances.
// - The constructor method is called automatically when an object is created from the class.
// - Constructors can accept parameters for initializing properties.

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
let person = new Person("Alice");

// Properties and Methods:
// - Properties represent the characteristics or data associated with a class.
// - Methods are functions defined within a class and can perform actions or computations.

class Person {
    name: string;
    age: number;

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Access Modifiers: public, private, protected:
// - Access modifiers control the visibility and accessibility of class members.
// - public members are accessible from anywhere.
// - private members are only accessible within the class.
// - protected members are accessible within the class and its subclasses.

class Person {
    private name: string;
    protected age: number;
    public city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

// Inheritance:
// - Inheritance allows you to create a new class (subclass) based on an existing class (superclass).
// - Subclasses inherit the properties and methods of the superclass.
// - The extends keyword is used to establish inheritance between classes.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Abstract Classes:
// - Abstract classes serve as blueprints for other classes and cannot be instantiated directly.
// - Abstract classes can contain abstract methods that must be implemented in subclasses.
// - Abstract methods are defined without an implementation.

abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

// ==============================================================================================

// Modules and Namespaces:

// Modules:
// - Modules in TypeScript provide a way to organize and reuse code in separate files.
// - A module can contain classes, functions, variables, interfaces, and other entities.
// - Modules can be exported and imported using the export and import keywords.

// File: mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// File: app.ts
import { add, subtract } from "./mathUtils"/;

console.log(add(5, 3));       // Output: 8
console.log(subtract(10, 7)); // Output: 3

// Namespaces:
// - Namespaces provide a way to organize code within a global scope.
// - Namespaces can contain classes, functions, variables, interfaces, and other entities.
// - Namespaces help avoid naming conflicts between different parts of the code.

// File: mathUtils.ts
namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

// File: app.ts
console.log(MathUtils.add(5, 3));       // Output: 8
console.log(MathUtils.subtract(10, 7)); // Output: 3

// Multiple Exports and Imports:
// - Modules can export multiple entities using named exports or a default export.
// - Multiple exports can be imported together or selectively using the appropriate syntax.

// File: mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export const PI = 3.14159;

// File: app.ts
import * as mathUtils from "./mathUtils";

console.log(mathUtils.add(5, 3));       // Output: 8
console.log(mathUtils.subtract(10, 7)); // Output: 3
console.log(mathUtils.PI);              // Output: 3.14159

// ==============================================================================================

// Generics:

// Introduction to Generics:
// - Generics provide a way to create reusable components that can work with different types.
// - They allow you to define placeholders for types in functions, classes, and interfaces.
// Generics enable you to write flexible and type-safe code by preserving type information.

function identity<T>(arg: T): T {
    return arg;
}

let result = identity<number>(10); // Type of 'result' is number

// Generic Functions:
// - Generic functions allow you to create functions that can operate on different types.
// - The type parameter is declared inside angle brackets <T> and can be used as a placeholder
// for the input or output types.

function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = reverseArray<number>(numbers); // Type of 'reversedNumbers' is number[]

// Generic Classes:
// - Generic classes allow you to create classes that can work with different types.
// - The type parameter is declared inside angle brackets <T> and can be used as a placeholder for 
// properties, methods, and constructors.

class Container<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let container = new Container<string>("Hello");
let value = container.getValue(); // Type of 'value' is string

// Constraints:
// - Constraints allow you to restrict the types that can be used as type arguments in generics.
// - Constraints are specified using the extends keyword followed by a type or interface.

interface Lengthy {
    length: number;
}

function printLength<T extends Lengthy>(obj: T): void {
    console.log(obj.length);
}

printLength("Hello"); // Output: 5
printLength([1, 2, 3]); // Output: 3
printLength({ length: 10 }); // Output: 10

// ==============================================================================================

// Advanced types:

// Union Types:
// - Union types allow you to define a type that can hold multiple possible types.
// - You can use the | symbol to specify multiple types as the union.
// - Union types enable you to handle different possibilities in your code.

function displayData(data: string | number) {
    console.log(data);
}

displayData("Hello"); // Output: Hello
displayData(42);      // Output: 42

// Intersection Types:
// - Intersection types allow you to combine multiple types into a single type.
// - You can use the "&" symbol to specify multiple types as the intersection.
// - Intersection types enable you to create a new type that has all the properties
// and methods of the combined types.

interface Person {
    name: string;
}

interface Employee {
    id: number;
}

type EmployeeWithDetails = Person & Employee;

const employee: EmployeeWithDetails = {
    name: "Alice",
    id: 123
};

// Type Guards:

// - Type guards are conditional statements that narrow down the
// type of a variable within a specific code block.
// - They allow you to perform runtime checks to determine the
// type of an object and then safely use that object based on its type.

function processData(data: string | number) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    } else {
        console.log(data * 2);
    }
}

processData("Hello"); // Output: HELLO
processData(5);       // Output: 10

// Type Aliases:

// - Type aliases allow you to create custom names for types,
// making your code more readable and expressive.
// - They enable you to define complex types using descriptive names
// and reuse them throughout your codebase.

type Point = { x: number; y: number };

function calculateDistance(point1: Point, point2: Point) {
    // Calculation logic
}

// Literal Types:

// - Literal types allow you to specify exact values as types.
// - You can use string literals, number literals, boolean literals,
// or even combined literals to define precise types.

type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move("up");    // Output: Moving up
move("right"); // Output: Moving right

// Discriminated Unions:

// - Discriminated unions combine union types and literal types to create
// type-safe patterns for working with different variations of a type.
// - They typically include a common property, known as a discriminant,
// that distinguishes between the different variations.

interface Square {
    kind: "square";
    sideLength: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Square | Rectangle;

function getArea(shape: Shape) {
    if (shape.kind === "square") {
        return shape.sideLength ** 2;
    } else {
        return shape.width * shape.height;
    }
}

const square: Square = { kind: "square", sideLength: 5 };
console.log(getArea(square)); // Output: 25

// Conditional Types:

// - Conditional types allow you to perform type-level conditional logic based on other types.
// - They enable you to define types that depend on the evaluation of a condition,
// providing more flexibility in type definitions.

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "unknown";

const nameOfType: TypeName<number> = "number";
console.log(nameOfType); // Output: number

// ==============================================================================================

//  Decorators:

// - Decorators are a special kind of declaration that can be attached to a class declaration,
// method, accessor, property, or parameter.
// - They allow you to modify the behavior or add metadata to the target they are applied to.
// - Decorators are declared using the @ symbol followed by the decorator name.

// Class Decorators:

// - Class decorators are applied to classes and can modify or add behavior to the class itself.
// - They receive the class constructor as the target and can optionally return a new constructor
// to replace or modify the original class.

function logClass(target: any) {
    console.log(`Class "${target.name}" has been decorated.`);
}

@logClass
class MyClass {
    // Class members
}

// Method and Property Decorators:
// - Method and property decorators are applied to methods and properties of a class.
// - They receive the class prototype and the property key as the target and can optionally return
// a new property descriptor to replace or modify the original property.

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Method "${key}" in class "${target.constructor.name}" has been decorated.`);
}

class MyClass {
    @logMethod
    myMethod() {
        // Method implementation
    }
}

// Parameter Decorators:
// - Parameter decorators are applied to the parameters of a method or constructor.
// - They receive the class prototype, the method name (or constructor),
// and the parameter index as the target.

function logParameter(target: any, methodName: string, parameterIndex: number) {
    console.log(`Parameter ${parameterIndex} of method "${methodName}" in class "${target.constructor.name}" has been decorated.`);
}

class MyClass {
    myMethod(@logParameter param: string) {
        // Method implementation
    }
}

// ==============================================================================================

// Asynchronous Programming:

// Callbacks:

// - Callbacks are a traditional approach to handle asynchronous operations.
// - You pass a callback function as an argument to an asynchronous function.
// - When the asynchronous operation completes, the callback function
// is invoked with the result or error.
// - Callbacks allow you to specify the code that should execute after
// the asynchronous operation completes.

function fetchData(callback: (error: Error | null, data: any) => void) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(null, data);
    }, 2000);
}

fetchData((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// Promises:

// - Promises provide a more structured way to handle asynchronous operations.
// - A promise represents the eventual completion (or failure) of an asynchronous operation.
// - Promises have methods like .then() and .catch() to handle the resolved value or errors respectively.
// - Promises allow you to chain multiple asynchronous operations using these methods, making the code more readable.

function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });



// Async/Await:

// - Async/Await is a modern approach to write asynchronous code in a synchronous-like manner.
// - The async keyword is used to define an asynchronous function.
// - The await keyword is used to pause the execution until a promise is resolved or rejected.
// - Async/Await makes asynchronous code easier to read and write, resembling synchronous code structure.

function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Data:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

getData();



// Handling Errors with Promises:

// - Error handling is an important aspect of asynchronous programming.
// - Promises provide convenient error handling through the .catch() method.
// - Errors can be caught and handled separately from the successful execution path.
// - Additionally, the try...catch block can be used with await to catch and handle errors in async functions.

// Promise.all and Promise.race:

// - Promise.all allows you to run multiple asynchronous operations concurrently and wait for all of them to complete.
// - Promise.race allows you to run multiple asynchronous operations concurrently and return the result of the first completed operation.
// - These methods are useful for scenarios where you need to perform multiple asynchronous tasks and handle the combined result.

function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = new Error("Failed to fetch data");
            reject(error);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// ==============================================================================================

// Tooling and Configuration:

// TypeScript Compiler (tsc):
// - The TypeScript Compiler (tsc) is a command-line tool that transpiles TypeScript code to JavaScript.
// - You can install it globally using npm: npm install -g typescript

// hello.ts
const message: string = "Hello, TypeScript!";
console.log(message);

// cmd:

tsc hello.ts // compiles the Typescript file to JavaScript (hello.js will be made)


// tsconfig.json:
// - The tsconfig.json file is used to configure the TypeScript compiler options for a project.
// - It allows you to define compiler settings, include or exclude files, specify the output directory, and set up additional options.

{
    "compilerOptions": {
        "target": "es6",
            "outDir": "dist",
                "strict": true
    },
    "include": [
        "src/**/*.ts"
    ],
        "exclude": [
            "node_modules"
        ]
}

// TypeScript in Build Systems:

// - TypeScript can be integrated into various build systems and development workflows.

// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};

// Type Definitions (@types):

// - TypeScript provides type definitions (typings) for JavaScript libraries and frameworks.
// Here's an example of installing and using type definitions for the Lodash library:
// cmd:
npm install--save lodash
npm install--save - dev @types/lodash

// Once the type definitions are installed, you can use TypeScript's static type checking with Lodash:

import { uniq } from 'lodash';

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = uniq(numbers);
console.log(uniqueNumbers);

// ==============================================================================================

// Advanced Topics:

// Type System Tricks:

// - TypeScript's type system provides various tricks and techniques to achieve advanced type manipulation and inference.
// - Techniques such as conditional types, mapped types, and infer keyword can be used to create more flexible and reusable type definitions.

// ts file:
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "unknown";

const nameOfType: TypeName<number> = "number";
console.log(nameOfType); // Output: number

//ts file:
type Optional<T> = { [K in keyof T]?: T[K] };

interface Person {
    name: string;
    age: number;
}

const optionalPerson: Optional<Person> = { name: "Alice" };
console.log(optionalPerson); // Output: { name: "Alice" }



// Metaprogramming:

// - Metaprogramming involves writing code that manipulates or generates other code at runtime.
// - TypeScript supports metaprogramming through features like decorators, type reflection, and type manipulation utilities.

function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log(`Method "${key}" in class "${target.constructor.name}" has been decorated.`);
}

class MyClass {
    @logMethod
    myMethod() {
        // Method implementation
    }
}


// Mixins:

// - Mixins enable the composition of reusable functionality across multiple classes.
// - They allow you to combine the properties and methods of multiple classes into a single class, providing code reuse and flexibility.

class Car {
    drive() {
        console.log("Driving the car.");
    }
}

class Flyable {
    fly() {
        console.log("Flying in the air.");
    }
}

class FlyingCar implements Car, Flyable {
    drive: () => void;
    fly: () => void;

    constructor() {
        // Mixin implementation
    }
}

const myCar = new FlyingCar();
myCar.drive(); // Output: Driving the car.
myCar.fly();   // Output: Flying in the air.


// Type-Level Programming:
// - Type-level programming refers to writing code that operates on types themselves rather than their runtime values.
// - Techniques like conditional types, mapped types, and type inference can be used to perform complex type-level computations and transformations.

// Integrating with Build Tools and Editors:
// - TypeScript integrates well with various build tools and editors, allowing for a smooth development experience.
// - Tools like linters (e.g., ESLint, TSLint), formatters (e.g., Prettier), and code editors (e.g., Visual Studio Code) provide TypeScript-specific features and extensions.





// FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! FINISH! 