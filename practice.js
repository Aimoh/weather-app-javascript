// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const uzCardBtn = document.getElementById("uzCardBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");
//
// mySubmit.onclick = function () {
//     myCheckBox.checked ? subResult.textContent = `You are subscribed!` : subResult.textContent = `You are NOT subscribed!`;
//
//     if (visaBtn.checked) {
//         paymentResult.textContent = `You are paying with Visa.`;
//     } else if (masterCardBtn.checked) {
//         paymentResult.textContent = `You are paying with MasterCard.`;
//     } else if (uzCardBtn.checked) {
//         paymentResult.textContent = `You are paying with UzCard.`;
//     } else {
//         paymentResult.textContent = `You must select a payment type.`
//     }
// }

// let purchaseAmount = 125;
//
// let discount = purchaseAmount >= 100 ? 10 : 0;
//
// console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

// let username = "Endless";
// let result = username.startsWith(' ');
//
// if (result) {
//     console.log("Your name can't start with ' '");
// } else {
//     console.log(username);
// }

// let phoneNumber = "123-456-7890";
//
// phoneNumber = phoneNumber.replaceAll("-", "");
//
// console.log(phoneNumber);


// const fullName = "Brotherowerfar Code";
//
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
//
// console.log(firstName);
// console.log(lastName);

// const email = "aimoh@example.com";
//
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
//
// console.log(username);
// console.log(extension);


// no method chaining

// let username = window.prompt("Enter your username: ");
//
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
//
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
//
// console.log(username);

// method chaining

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//
// console.log(username);


// let loggedIn = true;
// let username;
// let password;
//
// do {
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);
//
//     if (username === "aimoh" && password === "password") {
//         loggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid credentials");
//     }
// } while (!loggedIn);

// for (let i = 1; i <= 20; i++) {
//     if (i == 13) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// NUMBER GUESSING GAME

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
//
// let attempts = 0;
// let guess;
// let running = true;
//
// while(running){
//
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);
//
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else{
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!");
//         }
//         else if(guess > answer){
//             window.alert("TOO HIGH! TRY AGAIN!");
//         }
//         else{
//             window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }

// function add(x, y) {
//     return x + y;
// }
//
// function isEven(number) {
//     return number % 2 === 0 ? true : false;
// }
//
// function isValidEmail(email) {
//     return email.includes("@") ? true : false;
// }
//
// console.log(isValidEmail("Aimoh@fake.com"));

// Temperature conversion program

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;
// function convert() {
//     if (toFahrenheit.checked) {
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     }
//     else if (toCelsius.checked) {
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp.toFixed(1) + "°C";
//     } else {
//         result.textContent = "Select a unit";
//     }
// }


// let fruits = ["apple", "banana", "mango", "coconut"];
//
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// 2D Array

// const matrix =
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ];
//
// matrix[0][0] = 'X';
// matrix[0][1] = 'O';
// matrix[0][2] = 'X';
//
// matrix[1][0] = 'O';
// matrix[1][1] = 'X';
// matrix[1][2] = 'O';
//
// matrix[2][0] = 'X';
// matrix[2][1] = 'O';
// matrix[2][2] = 'X';
//
// for (let row of matrix) {
//     const rowString = row.join(' ');
//     console.log(rowString);
// }


// spread operator

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
//
// console.log(maximum)
//
// let username = "Aimoh Endless";
// let letters = [...username];
//
// console.log(letters);
//
// let fruits = ["banana", "apple"];
// let vegetables = ["potatoes", "carrot"];
//
// let foods = [...fruits, ...vegetables];
//
// console.log(foods);

// rest parameters

// function openFridge(...foods) {
//     console.log(...foods)
// }
//
// function getFood(...foods) {
//     return foods;
// }
//
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";
//
// // openFridge(food1, food2, food3, food4, food5);
//
// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);
//
// function sum(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//
//     return result;
// }
//
// const total = sum(1, 5, 4);
//
// console.log(`Your total is $${total}`);
//
// function getAverage(...numbers) {
//     let result = 0;
//     for (let number of numbers) {
//         result += number;
//     }
//
//     return result / numbers.length;
// }
//
// const total = getAverage(75, 100, 85, 90, 50);
// console.log(total);

// function combineStrings(...strings) {
//     return strings.join(" ");
// }
//
// const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
//
// console.log(fullName);

// Dice Roller Program

// function rollDice() {
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];
//
//     for (let i = 0; i < numOfDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/${value}.png">`);
//     }
//
//     diceResult.textContent = `dice: ${values.join(', ')}`;
//     diceImages.innerHTML = images.join('');
// }


// Random password generator ❤️

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";
//
//     let allowedChars = "";
//     let password = "";
//
//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";
//
//     if (length <= 0) {
//         return `(password length must be at least 1)`;
//     }
//
//     if (allowedChars.length === 0) {
//         return `(at least 1 set of character needs to be selected)`
//     }
//
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//
//     return password;
// }
//
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;
//
// const password = generatePassword(
//     passwordLength,
//     includeLowercase,
//     includeUppercase,
//     includeNumbers,
//     includeSymbols
// );
//
// console.log(`Generated password: ${password}`);


// callback 😂

// hello(wait);
//
// function hello(callback) {
//     console.log("Hello!");
//     callback();
// }
//
// function goodbye() {
//     console.log("Goodbye!");
// }
//
// function wait() {
//     console.log("Wait!");
// }
//
// function leave() {
//     console.log("Leave!");
// }

// sum(displayPage, 3, 5);
//
// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }
//
// function displayConsole(result) {
//     console.log(result);
// }
//
// function displayPage(result) {
//     document.getElementById("myH1").textContent = result;
// }

// .forEach() 🤣


// let numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach(cube);
// numbers.forEach(display);
//
// function double(element, index, array) {
//     array[index] = element * 2;
// }
//
// function triple(element, index, array) {
//     array[index] = element * 3;
// }
//
// function square(element, index, array) {
//     array[index] = Math.pow(element, 2);
// }
//
// function cube(element, index, array) {
//     array[index] = Math.pow(element, 3);
// }
//
// function display(element) {
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];
//
// fruits.forEach(capitalize);
// fruits.forEach(display);
//
// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase()
// }
//
// function lowerCase(element, index, array) {
//     array[index] = element.toLowerCase()
// }
//
// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element) {
//     console.log(element)
// }


// .map() 👍


// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);
//
// console.log(cubes);
// function square(element) {
//     return Math.pow(element, 2);
// }
//
// function cube(element) {
//     return Math.pow(element, 3);
// }


// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(lowerCase);
//
// console.log(studentsLower);
//
// function upperCase(element) {
//     return element.toUpperCase();
// }
//
// function lowerCase(element) {
//     return element.toLowerCase();
// }
//
// const dates = ["2025-07-04", "2025-05-03", "2025-03-04"];
// const formattedDates = dates.map(formatDates);
//
// console.log(formattedDates);
//
// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }


// .filter();

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
//
// console.log(oddNums);
//
// function isEven(element) {
//     return element % 2 === 0;
// }
//
// function isOdd(element) {
//     return element % 2 !== 0;
// }

// const ages = [16, 17, 18, 18, 19, 20, 60];
//
// const adults = ages.filter(isAdult);
// console.log(adults);
// function isAdult(element) {
//     return element >= 18;
// }


// const words = ["apple", "banana", "strawberry", "orange", "coconut", "pineapple", "kiwi"];
//
// const shortWords = words.filter(getShortWords);
// const longWords = words.filter(getLongWords);
//
// console.log(longWords);
//
// function getShortWords(element) {
//     return element.length <= 6;
// }
//
// function getLongWords(element) {
//     return element.length > 6;
// }


// .reduce()

// const prices = [5 ,30, 10, 25, 15, 20];
//
// const total = prices.reduce(sum);
//
// console.log(`$${total}`)
//
// function sum(accumulator, element) {
//     return accumulator + element;
// }

// const grades = [75, 50, 90, 80, 65, 95];
//
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);
//
// console.log(maximum);
// console.log(minimum);
//
// function getMax(accumulator, element) {
//     return Math.max(accumulator, element);
// }
//
// function getMin(accumulator, element) {
//     return Math.min(accumulator, element);
// }


// function expressions

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function (element) {
//     return Math.pow(element, 2);
// });
//
// const cubes = numbers.map(function (element) {
//     return Math.pow(element, 3)
// });
//
// const evenNums = numbers.filter(function (element){
//     return element % 2 === 0;
// });
//
// const oddNums = numbers.filter(function (element){
//     return element % 2 !== 0;
// });
//
// const total = numbers.reduce(function (accumulator, element) {
//     return accumulator + element;
// });
//
// console.log(total);

// Arrow functions

// const hello = (name, age) => {
//     console.log(`Hello ${name}`)
//     console.log(`You are ${age} years old`)};
//
// hello('Aimoh', 25);

// setTimeout(() => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6];
//
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);
//
// console.log(total);

// Objects

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: () => console.log("Hi! I am Spongebob"),
//     eat: function (){
//         console.log("I am eating a Krabby Patty")},
// }
//
// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hey! I am Patrick"),
//     eat: () => console.log("I am eating roast beef, chicken and pizza"),
// }
//
// person1.sayHello();
// person1.eat();
//
// person2.sayHello();
// person2.eat();


// This

// const person1 = {
//     name: "Spongebob",
//     favFood: "Hamburgers",
//     sayHello: function (){
//         console.log(`Hi am ${this.name}`)
//     },
//     eat: function () {
//         console.log(`${this.name} is eating ${this.favFood}`)
//     },
// }
//
// const person2 = {
//     name: "Patrick",
//     favFood: "Pizza",
//     sayHello: function (){
//         console.log(`Hi am ${this.name}`)
//     },
//     eat: function () {
//         console.log(`${this.name} is eating ${this.favFood}`)
//     },
// }
//
// person1.eat();
// person2.eat();


// Constructor

// function Car(make, model, year, color) {
//         this.make = make,
//         this.model = model,
//         this.year = year,
//         this.color = color,
//         this.drive = function () {
//             console.log(`You drive the ${this.model}`)
//         }
// }
//
// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2013, "yellow")
//
// car1.drive();


// Class

// class Product
// {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//
//     displayProduct() {
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }
//
//     calculateTotal(salesTax) {
//         return this.price + (this.price * salesTax)
//     }
// }
//
// const salesTax = 0.05;
//
// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 23.50);
// const product3 = new Product("Underwear", 100.00);
//
// product2.displayProduct();
//
// const total = product2.calculateTotal(salesTax);
//
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// Static

// class MathUtil
// {
//     static PI = 3.14159;
//
//     static getDiameter(radius) {
//         return radius * 2;
//     }
//
//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }
//
//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }
//
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User
// {
//     static userCount = 0;
//
//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }
//
//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`)
//     }
//
//     sayHello() {
//         console.log(`Hello, my username is ${this.username}`)
//     }
// }
//
// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");
//
// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
//
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
//
// console.log(User.userCount);
// User.getUserCount();

// Inheritance 🚀

// class Animal
// {
//     alive = true
//
//     eat() {
//         console.log(`This ${this.name} is eating`);
//     }
//
//     sleep() {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
//
// class Rabbit extends Animal
// {
//     name = "rabbit";
//
//     run() {
//         console.log(`This ${this.name} is running`);
//     }
// }
//
// class Fish extends Animal
// {
//     name = "fish";
//
//     swim() {
//         console.log(`This ${this.name} is swimming`);
//     }
// }
//
// class Hawk extends Animal
// {
//     name = "hawk";
//
//     fly() {
//         console.log(`This ${this.name} is flying`);
//     }
// }
//
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
//
// console.log(rabbit.alive);
//
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();


// Super  ➡️

// class Animal
// {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     move(speed) {
//         console.log(`The ${this.name} moves at speed of ${speed}mph`);
//     }
// }
//
// class Rabbit extends Animal
// {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//
//     run() {
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
//
// }
//
// class Fish extends Animal
// {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
//
//     swim() {
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }
//
// class Hawk extends Animal
// {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//
//     fly() {
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }
//
// const rabbit = new Rabbit("bugsbunny", 1, 25);
// const fish = new Fish("fisher", 2, 12);
// const hawk = new Hawk("hawker", 3, 50);
//
// fish.swim();


// Getters and Setters 👌

// class Rectangle
// {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//
//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }
//
//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         } else {
//             console.error("Height must be a positive number");
//         }
//     }
//
//     get width() {
//         return `${this._width.toFixed(1)}cm`;
//     }
//
//     get height() {
//         return `${this._height.toFixed(1)}cm`;
//     }
//
//     get area() {
//         return `${(this._width * this._height).toFixed(1)}cm^2`;
//     }
// }
//
// const rectangle = new Rectangle(3, 4);
//
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person
// {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//
//     set firstName(newFirstName) {
//         if (typeof newFirstName === "string" && newFirstName.length > 0) {
//             this._firstName = newFirstName;
//         } else {
//             console.error("First name must be an a non-empty string");
//         }
//     }
//
//     set lastName(newLastName) {
//         if (typeof newLastName === "string" && newLastName.length > 0) {
//             this._lastName = newLastName;
//         } else {
//             console.error("Last name must be an a non-empty string");
//         }
//     }
//
//     set age(newAge) {
//         if (typeof newAge === "number" && newAge >= 0) {
//             this._age = newAge
//         } else {
//             console.error("Age must be a non-negative number")
//         }
//     }
//
//     get firstName() {
//         return this._firstName;
//     }
//
//     get lastName() {
//         return this._lastName;
//     }
//
//     get fullName() {
//         return this._firstName + " " + this._lastName;
//     }
//
//     get age() {
//         return this._age;
//     }
// }
//
// const person = new Person("Aimoh", "Endless", 25);
//
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

// Destructuring 🚀


// let a = 1;
// let b = 2;
//
// [a, b] = [b, a];
//
// console.log(a);
// console.log(b);

// const colors =  ["red", "green", "blue", "black", "white"];
//
// [colors[0], colors[4]] = [colors[4], colors[0]];
//
// console.log(colors);

// const colors =  ["red", "green", "blue", "black", "white"];
//
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
//
// console.log(firstColor);
// console.log(extraColors);

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// }
//
// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }
//
// const {firstName, lastName, age, job = "Unemployed"} = person1;
//
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// function displayPerson({firstName, lastName, age, job = "Unemployed"}) {
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
//
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "SquarePants",
//     age: 30,
//     job: "Fry Cook",
// }
//
// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 34,
// }
//
// displayPerson(person1);


// Nested objects 🚀

// const person = {
//     fullName: "Aimoh Endless",
//     age: 30,
//     isStudent: true,
//     hobbies: ["taekwon-do", "swimming", "cooking", "developing"],
//     address: {
//         street: "St.Uzbekistan",
//         city: "Tashkent",
//         country: "Uzbekistan",
//     }
// }
//
// for (const property in person.address) {
//     console.log(person.address[property])
// }


// class Person
// {
//     constructor(name, age, ...address) {
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }
//
//
// class Address
// {
//     constructor(street, city, country) {
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
//
// const person1 = new Person("Aimoh", 25, "124 Conch.", "Bikini Boot", "Int. Water");
// const person2 = new Person("Endless", 22, "122 Frost.", "Wall Crupost", "Int. Earth");
// const person3 = new Person("Endless", 27, "127 Claswf.", "fafwf wafwf", "Int. Oblacko");
//
// console.log(person1.address.street);

// Array of Objects

// const fruits = [
//     {name: "apple", color: "red", calories: 95},
//     {name: "orange", color: "orange", calories: 45},
//     {name: "banana", color: "yellow", calories: 105},
//     {name: "coconut", color: "white", calories: 159},
//     {name: "pineapple", color: "yellow", calories: 37}
// ];


//pop, splice
// fruits.splice(1, 2)
// console.log(fruits);

// foreach
// fruits.forEach(fruit => console.log(fruit.calories));

//map
// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);
//
// console.log(fruitCalories);

//filter

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100 );
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100 );
//
// console.log(highCalFruits);

//reduce

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
// const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
//
// console.log(minFruit);


// sort()

// let cars = ["AUDI", "MERCEDES-BENZ", "BMW", "MASERATI", "DODGE"];
//
// cars.sort();
//
// console.log(cars);
//
// let numbers = [23, 15, 36, 1, 4, 5, 12];
//
// numbers.sort((a, b) => a - b);
//
// console.log(numbers);

// const students = [
//     {name: "Frutality", age: 25, hobby: "Math"},
//     {name: "Brutality", age: 32, hobby: "Algebra"},
//     {name: "Kendolity", age: 18, hobby: "Physics"},
//     {name: "Fatality", age: 21, hobby: "Geometry"}
// ];
//
// students.sort((a, b) => a.hobby.localeCompare(b.hobby));
//
// console.log(students);

// Shuffle an Array by Fisher-Yates algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
//
// shuffle(cards);
//
// console.log(cards);
//
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const random = Math.floor(Math.random() * (i + 1));
//
//         [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// Date Objects

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// const date = new Date("2024-01-02T12:00:00Z");
// const date = new Date(0);

// const date = new Date();
//
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
//
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(seconds);

// const date = new Date();
//
// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);
//
// console.log(date);

// const date1 = new Date("2024-12-31");
// const date2 = new Date("2025-01-01");
//
// if (date2 > date1) {
//     console.log("Happy New Year!");
// }


// closure 🚀

// function outer() {
//     let message = "Hello";
//     function inner() {
//         console.log(message);
//     }
//
//     inner();
// }
//
// outer();


// function createCounter() {
//
//     let count = 0;
//     function increment() {
//
//         count++;
//         console.log(`Count increased to ${count}`)
//     }
//
//     function getCount() {
//         return count;
//     }
//
//     return {increment, getCount};
// }
//
// const counter = createCounter();
//
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();
//
// console.log(`The current count is ${counter.getCount()}`);

// function createGame() {
//     let score = 0;
//
//     function increaseScore(points) {
//         score += points;
//         console.log(`+${points}pts`);
//     }
//
//     function decreaseScore(points) {
//         score -= points;
//         console.log(`-${points}pts`);
//     }
//
//     function getScore() {
//         return score;
//     }
//
//     return {increaseScore, decreaseScore, getScore};
// }
//
// const game = createGame();
//
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
//
// console.log(`The final score is ${game.getScore()}pts`);

// setTimeout() ➡️

// function sayHello() {
//     window.alert("Hello")
// }
//
// setTimeout(sayHello, 3000);

// setTimeout(function () {
//     window.alert("Hello");
// }, 3000);

// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//
// clearTimeout(timeoutId);

// let timeoutId;
//
// function startTimer() {
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//     console.log("STARTED");
// }
//
// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }

// console.time() 👍

// console.time("test");
//
// for (let i = 0; i < 1000000000; i++) {
//
// }
//
// console.timeEnd("test");

// function loadData() {
//
//     console.time("loadData");
//
//     for (let i = 0; i < 1000000000; i++) {
//         // pretend to load data
//     }
//
//     console.timeEnd("loadData");
// }
//
// loadData();

// .toLocaleString()
// Intl.NumberFormat()
// number.toLocaleString("locale", {options})

// let number = 123456.789;
//
// // number = number.toLocaleString("en-US");
// // number = number.toLocaleString("ru-RU");
// // number = number.toLocaleString("de-DE");
// // number = number.toLocaleString("uz-UZ");
// // number = number.toLocaleString(undefined);
//
// number = number.toLocaleString("uz-UZ", {style: "currency", currency: "USD"});
//
//
// console.log(number);

// COMPOUND INTEREST CALCULATOR 👌

// function calculate() {
//     const totalAmount = document.getElementById("total-amount");
//     const principalInput = document.getElementById("principal");
//     const rateInput = document.getElementById("rate");
//     const yearsInput = document.getElementById("years");
//
//     let principal = Number(principalInput.value);
//     let rate = Number(rateInput.value / 100);
//     let years = Number(yearsInput.value);
//
//     if (principal < 0 || isNaN(principal)) {
//         principal = 0;
//         principalInput.value = 0;
//     }
//
//     if (rate < 0 || isNaN(rate)) {
//         rate = 0;
//         rateInput.value = 0;
//     }
//
//     if (years < 0 || isNaN(years)) {
//         years = 0;
//         yearsInput.value = 0;
//     }
//
//     const result = principal * Math.pow((1 + rate), years)
//
//     totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
// }

// DIGITAL CLOCK PROGRAM 👍

// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0)
//     const minutes = now.getMinutes().toString().padStart(2, 0);
//     const seconds = now.getSeconds().toString().padStart(2, 0);
//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
// }
//
// updateClock();
// setInterval(updateClock, 1000);

// StopWatch Program 👍

// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;
//
// function start() {
//     if (!isRunning) {
//         startTime = Date.now() - elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }
// }
//
// function stop() {
//     if (isRunning) {
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }
//
// function reset() {
//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent = "00:00:00:00"
// }
//
// function update() {
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;
//
//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milliseconds = Math.floor(elapsedTime % 1000 / 10);
//
//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");
//     milliseconds = String(milliseconds).padStart(2, "0");
//
//     display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

// ES6 Module 😍

// import { PI, getCircumference, getVolume, getArea } from './mathUtil.js';
//
// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);
//
// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${volume.toFixed(2)}cm^3`);

// Asynchronus 👌

// function func1(callback) {
//     setTimeout(() => {
//         console.log("task 1");
//         callback()
//     }, 3000);
// }
//
// function func2() {
//     console.log("task 2");
//     console.log("task 3");
//     console.log("task 4");
// }
//
// func1(func2);

// Error handling 😊

// try {
//     console.log("Hello");
//     // network errors
//     // promise rejection
//     // security rejection
// } catch (error) {
//     console.error(error);
// }
// finally {
//     // close files
//     // close connections
//     // release resources
//     console.log("This always execute");
// }
//
//
// console.log("Ti v konce doroge!");

// try {
//     const dividend = Number(window.prompt("Viberi delimoe chislo: "));
//     const divisor = Number(window.prompt("Viberi delitel: "));
//
//     if (divisor == 0) {
//         throw new Error("You can't divide by zero!");
//     }
//
//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Znachenie doljni bit tsifri");
//     }
//
//     const result = dividend / divisor;
//     console.log(result);
// } catch (e) {
//     console.error(e);
// }
//
// console.log("finished")


// Calculator 👌

// const display = document.getElementById("display");
//
// function appendToDisplay(input) {
//     display.value += input;
// }
//
// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch (e) {
//         display.value = "Error";
//     }
// }
//
// function clearDisplay() {
//     display.value = "";
// }

// DOM  = Document Object Model 🚀

// const username = " ";
//
// const welcomeMsg = document.getElementById("welcome-msg");
//
// welcomeMsg.textContent += username === "" ? `Guest` : username;
//
// console.dir(document);

// Element Selectors 👍

// 1. document.getElementById()  =>  Element or Null
// 2. document.getElementsByClassName() => HTML Collection
// 3. document.getElementsByTagName() => HTML Collection
// 4. document.querySelector() => Element or Null
// 5. document.querySelectorAll() => NODELIST

// const myHeading = document.getElementById("my-heading");
//
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
//
// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "green";
// fruits[2].style.backgroundColor = "orange";

// for (let fruit of fruits) {
//     fruit.style.backgroundColor = "red";
// }

// we can't use forEach

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "blue";
// });


// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li")

// h4Elements[0].style.backgroundColor = "aqua";
// h4Elements[1].style.backgroundColor = "aqua";

// for (let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = "coral"
// }
//
// for (let liElement of liElements) {
//     liElement.style.backgroundColor = "lightyellow";
// }

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "coral";
// });
//
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// const element = document.querySelector(".fruits");
//
// element.style.backgroundColor = "coral";


// const foods = document.querySelectorAll("li");
//
// foods.forEach(food => {
//     food.style.backgroundColor = "coral";
// });

// DOM Navigation

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------- .firstElementChild --------

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "coral";


// const ulElements = document.querySelectorAll("ul");
//
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "coral";
// });

// ---------- .lastElementChild ------------

// const element = document.getElementById("fruits");
// const lastElement = element.lastElementChild;
// lastElement.style.backgroundColor = "coral";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "coral";
// });

// ---------- .nextElementSibling ------------

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "coral";


// ---------- .previousElementSibling ------------

// const element = document.getElementById("vegetables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "coral";


// ---------- .parentElement ------------

// const element = document.getElementById("pie");
// const parent = element.parentElement;
// parent.style.backgroundColor = "coral";

// ---------- .children ------------

// const element = document.getElementById("vegetables");
// const children = element.children;

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "coral";
// });

// children[1].style.backgroundColor = "coral";


//  Add/Change HTML 👌

// ------------ Example 1 <h1> ------------

// Step 1 Create the element
// const newH1 = document.createElement("h1");

// Step 2 Add Attributes/Properties
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "coral";
// newH1.style.textAlign = "center";

// Step 3 Append element to DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);


// Remove HTML element
// document.getElementById("box1").removeChild(newH1);


// ------------ Example 3 <li> ------------

// Step 1 Create the element
// const newListItem = document.createElement("li");

// Step 2 Add Attributes/Properties
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.color = "lightgreen";

// Step 3 Append element to DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);
//
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2])

// Remove HTML element
// document.getElementById("fruits").removeChild(newListItem);


// eventListener - .addEventListener(event, callback) 🚀
// events: click, mouseover, mouseout

// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn")
//
// myBtn.addEventListener("click", (event) => {
//     myBox.style.backgroundColor = "coral";
//     myBox.textContent = "OY OY OY! 😒";
// });
//
// myBtn.addEventListener("mouseover", (event) => {
//     myBox.style.backgroundColor = "lightyellow";
//     myBox.textContent = "Don't do it 🫥";
// });
//
// myBtn.addEventListener("mouseout", (event) => {
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "Click Me 😉";
// });


// eventListener - document.addEventListener(event, callback) 🚀
// events: keydown, keyup

// const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", (event) => {
//     myBox.textContent = "😮";
//     myBox.style.backgroundColor = "coral";
// });
//
// document.addEventListener("keyup", (event) => {
//     myBox.textContent = "😉";
//     myBox.style.backgroundColor = "lightblue";
// });


// const myBox = document.getElementById("myBox");
// const moveAmount = 30;
// let x = 0;
// let y = 0;
//
// document.addEventListener("keydown", (event) => {
//     myBox.textContent = "😮";
//     myBox.style.backgroundColor = "coral";
// });
//
// document.addEventListener("keyup", (event) => {
//     myBox.textContent = "😉";
//     myBox.style.backgroundColor = "lightblue";
// });
//
// document.addEventListener("keydown", (event) => {
//     if (event.key.startsWith("Arrow")) {
//
//         event.preventDefault();
//
//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });

//Hide and Show HTML on JS

// const myBtn = document.getElementById("myBtn");
// const myImg = document.getElementById("myImg");
//
// myBtn.addEventListener("click", (event) => {
//     if (myImg.style.display === "none") {
//         myImg.style.display = "block";
//         myBtn.textContent = "Hide"
//     } else {
//         myImg.style.display = "none";
//         myBtn.textContent = "Show";
//     }
// });


// NodeList 😎

// let buttons = document.querySelectorAll(".myBtns");

// Add html/css properties

// buttons.forEach((button) => {
//     button.style.backgroundColor = "green";
//     button.textContent += "🤣";
// });

// click event listener

// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "coral";
//     });
// });

//mouseover + mouseout event listener

// buttons.forEach((button) => {
//     button.addEventListener("mouseover", (event) => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)"
//     })
// });
//
// buttons.forEach((button) => {
//     button.addEventListener("mouseout", (event) => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)"
//     })
// });

// add an element
// const newBtn = document.createElement("button"); //step 1
// newBtn.textContent = "Button 5"; //step 2
// newBtn.classList = "myBtns";
// document.body.appendChild(newBtn) // step 3
//
// buttons = document.querySelectorAll(".myBtns");
//
// console.log(buttons)


// remove an element

// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myBtns");
//         console.log(buttons);
//     });
// });


// classList 👍

// const myH1 = document.getElementById("myH1");
// const myBtn = document.getElementById("myBtn");


// add
// myBtn.addEventListener("mouseover", (event) => {
//    event.target.classList.add("hover");
// });


// remove
// myBtn.addEventListener("mouseout", (event) => {
//     event.target.classList.remove("hover");
// });


// toggle
// myBtn.addEventListener("mouseover", (event) => {
//     event.target.classList.toggle("hover");
// });
//
// myBtn.addEventListener("mouseout", (event) => {
//     event.target.classList.toggle("hover");
// });


// myH1.classList.add("enabled");
// myBtn.classList.add("enabled");
//
// myH1.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "🤬";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });
//
// myBtn.addEventListener("click", (event) => {
//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "🤬";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// let buttons = document.querySelectorAll(".myBtns");
//
// buttons.forEach((button) => {
//     button.classList.add("enabled");
// });
//
// buttons.forEach((button) => {
//     button.addEventListener("mouseover", (event) => {
//         event.target.classList.toggle("hover");
//     });
// });
//
// buttons.forEach((button) => {
//     button.addEventListener("mouseout", (event) => {
//         event.target.classList.toggle("hover");
//     });
// });
//
// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         if (event.target.classList.contains("disabled")) {
//             event.target.textContent += "🤬";
//         } else {
//             event.target.classList.replace("enabled", "disabled");
//         }
//
//     });
// });

// ROCK PAPER SCISSORS

// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;
//
//
// function playGame(playerChoice) {
//     const computerChoice = choices[Math.floor(Math.random() * 3)];
//     let result = "";
//
//     if (playerChoice === computerChoice) {
//         result = "IT'S A TIE!";
//     } else {
//         switch (playerChoice) {
//             case "rock":
//                 result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                 result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "scissors":
//                 result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//     }
//
//     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//     resultDisplay.textContent = result;
//
//     resultDisplay.classList.remove("greenText", "redText");
//
//     switch (result) {
//         case "YOU WIN!":
//             resultDisplay.classList.add("greenText");
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//             break;
//         case "YOU LOSE!":
//             resultDisplay.classList.add("redText");
//             computerScore++;
//             computerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }


// Image Slider 🚀

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;
//
// // initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider);
//
// function initializeSlider() {
//     if (slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }
//
// function showSlide(index) {
//     if (index >= slides.length) {
//         slideIndex = 0;
//     }
//     else if (index < 0) {
//         slideIndex = slides.length - 1;
//     }
//
//     slides.forEach((slide) => {
//         slide.classList.remove("displaySlide");
//     });
//
//     slides[slideIndex].classList.add("displaySlide");
// }
//
// function prevSlide() {
//     clearInterval(intervalId);
//     slideIndex--;
//     showSlide(slideIndex);
// }
//
// function nextSlide() {
//     slideIndex++;
//     showSlide(slideIndex);
// }

// Callback Hell ✌️

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);
//
// }
//
// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000);
// }
//
// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000);
// }
//
// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500);
// }
//
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => console.log("All tasks complete"));
//         });
//     });
// });


// Promise 🚀

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const dogWalked = true;
//
//             if (dogWalked) {
//                 resolve("You walk the dog 🐕");
//             } else {
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }
//
// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const kitchenCleaned = true;
//
//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen 🔪");
//             } else {
//                 reject("You didn't clean the kitchen");
//             }
//         }, 2500);
//     });
// }
//
// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const trashOuted = true;
//
//             if (trashOuted) {
//                 resolve("You take out Musor 🗑️");
//             } else {
//                 reject("You didn't the out trash tik tok");
//             }
//         }, 500);
//     });
// }
//
// walkDog().then(value => {
//     console.log(value);
//     return cleanKitchen()
// })
//     .then(value => {
//         console.log(value);
//         return takeOutTrash()
//     })
//     .then(value => {
//         console.log(value);
//         console.log("You finished")
//     })
//     .catch(error => console.error(error));


// Async/Await

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const dogWalked = false;
//
//             if (dogWalked) {
//                 resolve("You walk the dog 🐕");
//             } else {
//                 reject("You DIDN'T walk the dog");
//             }
//         }, 1500);
//     });
// }
//
// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const kitchenCleaned = true;
//
//             if (kitchenCleaned) {
//                 resolve("You clean the kitchen 🔪");
//             } else {
//                 reject("You didn't clean the kitchen");
//             }
//         }, 2500);
//     });
// }
//
// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//
//             const trashOuted = true;
//
//             if (trashOuted) {
//                 resolve("You take out Musor 🗑️");
//             } else {
//                 reject("You didn't the out trash tik tok");
//             }
//         }, 500);
//     });
// }
//
// async function doChores() {
//     try {
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
//
//         const cleanKitchenResult = await cleanKitchen();
//         console.log(cleanKitchenResult);
//
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
//
//         console.log("You finished");
//     } catch (e) {
//         console.error(e);
//     }
//
// }
//
// doChores();


// JSON 🚀

// const names = ["Aimoh", "Endless", "Kendo", "Mudrets"];
// const person = {
//     "name": "Aimoh",
//     "age": 25,
//     "isEmployed": true,
//     "hobbies": ["Developing", "Taekwon-do", "Cooking"]
// };
// const people = [
//     {
//         "name": "Aimoh",
//         "age": 25,
//         "isEmployed": true
//     },
//     {
//         "name": "Endless",
//         "age": 23,
//         "isEmployed": false
//     },
//     {
//         "name": "Kendo",
//         "age": 31,
//         "isEmployed": true
//     },
//     {
//         "name": "Mudrets",
//         "age": 50,
//         "isEmployed": false
//     }
// ];
//
//
// const jsonString = JSON.stringify(people);
//
// console.log(jsonString);

// const jsonNames = `["Aimoh", "Endless", "Kendo", "Mudrets"]`;
// const jsonPerson = `{
//     "name": "Aimoh",
//     "age": 25,
//     "isEmployed": true,
//     "hobbies": ["Developing", "Taekwon-do", "Cooking"]
// }`;
// const jsonPeople = `[
//     {
//         "name": "Aimoh",
//         "age": 25,
//         "isEmployed": true
//     },
//     {
//         "name": "Endless",
//         "age": 23,
//         "isEmployed": false
//     },
//     {
//         "name": "Kendo",
//         "age": 31,
//         "isEmployed": true
//     },
//     {
//         "name": "Mudrets",
//         "age": 50,
//         "isEmployed": false
//     }
// ]`;
//
// const parseData = JSON.parse(jsonPeople);
//
// console.log(parseData);

// fetch("people.json").then(res =>
//     res.json()
// ).then(values =>
//     values.forEach(value => console.log(value.name)
//     )).catch(error => console.error(error));


// Cookie 🥧

// console.log(navigator.cookieEnabled);

// document.cookie = "firstName=Aimoh; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
// document.cookie = "lastName=Endless; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
//
// console.log(document.cookie);

// setCookie("email", "aimoh@example.com", 365);
// deleteCookie("email");
// deleteCookie("firstName");
// deleteCookie("lastName");
// console.log(document.cookie);


// setCookie("firstName", "Kendo", 365);
// setCookie("lastName", "Japan", 365);
//
// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// const firstText = document.querySelector("#firstText");
// const lastText = document.querySelector("#lastText");
// const submitBtn = document.querySelector("#submitBtn");
// const cookieBtn = document.querySelector("#cookieBtn");
//
// submitBtn.addEventListener("click", () => {
//     setCookie("firstName", firstText.value, 365);
//     setCookie("lastName", lastText.value, 365);
// });
//
// cookieBtn.addEventListener("click", () => {
//     firstText.value = getCookie("firstName");
//     lastText.value = getCookie("lastName");
// });
//
// deleteCookie("firstName");
// deleteCookie("lastName");
//
// function setCookie(name, value, daysToLive) {
//     const date = new Date();
//     date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//     let expires  = "expires=" + date.toUTCString();
//     document.cookie = `${name}=${value}; ${expires}; path=/`
// }
//
// function deleteCookie(name) {
//     setCookie(name, null, null);
// }
//
// function getCookie(name) {
//     const cDecoded = decodeURIComponent(document.cookie);
//     const cArray = cDecoded.split("; ");
//     let result = null;
//
//     cArray.forEach(element => {
//         if (element.indexOf(name) === 0) {
//             result = element.substring(name.length + 1)
//         }
//     });
//
//     return result;
// }


// Fetch 🚀

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


// fetchData();
// async function fetchData() {
//     try {
//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//
//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//
//         const data = await response.json();
//         const pokemonSprite = data.sprites.front_default;
//         const imgElement = document.getElementById("pokemonSprite");
//
//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     } catch (e) {
//         console.error(e);
//     }
// }