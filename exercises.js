// ----- Class1 ----- //

// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;
//   constructor(leftSide, rightSide, width) {
//     this.#leftSide = leftSide;
//     this.#rightSide = rightSide;
//     this.#width = width;
//   }

//   get getLeftSide() {
//     return this.#leftSide;
//   }

//   get getRightSide() {
//     return this.#rightSide;
//   }

//   get getWidth() {
//     return this.#width;
//   }

//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }

// let trn1 = new Triangle(4, 5, 7);

// trn1.setSides(10, 20, 30);

// console.log(trn1.getLeftSide);
// console.log(trn1.getRightSide);
// console.log(trn1.getWidth);

// ----- Class2 ----- //

// class Employee {
//   #id;
//   #firstName;
//   #lastName;
//   #salary;
//   constructor(firstName, lastName, id, salary) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.#id = id;
//     this.#salary = salary;
//   }

//   get getFirstName() {
//     return this.#firstName;
//   }

//   get getLastName() {
//     return this.#lastName;
//   }

//   get getId() {
//     return this.#id;
//   }

//   get getSalary() {
//     return this.#salary;
//   }

//   setId(id) {
//     this.#id = id;
//   }
//   setFirstName(fName) {
//     this.#firstName = fName;
//   }
//   setLastName(lName) {
//     this.#lastName = lName;
//   }
//   setSalary(s) {
//     this.#salary = s;
//   }

//   get fullName() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }

//   set fullName(input) {
//     [this.#firstName, this.#lastName] = input.split(" ");
//   }

//   get annualSalary() {
//     return this.#salary * 12;
//   }

//   raiseSalary(percent) {
//     return this.#salary * (1 + (percent / 100));
//   }
// }

// let emp1 = new Employee("Azamat", "Abraev", 14568, 3540);

// emp1.setFirstName("John");
// emp1.setLastName("Doe");
// emp1.setId(42)
// emp1.setSalary(21800);

// emp1.fullName = "John Doe";

// console.log(emp1.getFirstName);
// console.log(emp1.getLastName);
// console.log(emp1.getId);
// console.log(emp1.getSalary);
// console.log(emp1.fullName);
// console.log(emp1.annualSalary);
// console.log(emp1.raiseSalary(20));

// ----- Class3 ----- //

// class CustomDate {
//   #day;
//   #month;
//   #year;
//   constructor(day, month, year) {
//     this.#day = day;
//     this.#month = month;
//     this.#year = year;
//   }

//   get getDay() {
//     return this.#day;
//   }

//   set getDay(input) {
//     if (this.#day < 10) {
//       this.#day = `0${this.#day}`;
//     }
//     input = this.#day;
//   }

//   get getMonth() {
//     if (this.#month < 10) {
//       this.#month = `0${this.#month}`;
//     }
//     return this.#month;
//   }

//   set getMonth(input) {
//     this.#month = input;
//   }

//   get getYear() {
//     return this.#year;
//   }

//   set getYear(input) {
//     this.#year = input
//   }

//   get getISODate() {
//     return `${this.#day}-${this.#month}-${this.#year}`;
//   }

// }

// let eg1 = new CustomDate(19, 2, 2003);

// eg1.getDay = 20;
// eg1.getMonth = 3;
// eg1.getYear = 2004;

// console.log(eg1.getDay);
// console.log(eg1.getMonth);
// console.log(eg1.getYear);
// console.log(eg1.getISODate);

// ----- Class4 ----- //

// class Time {
//   #hour;
//   #minute;
//   #second;
//   constructor(hour, minute, second) {
//     this.#hour = hour;
//     this.#minute = minute;
//     this.#second = second;
//   }
//   get getHour() {
//     if (this.#hour < 10) {
//       return `0${this.#hour}`;
//     }
//     return this.#hour;
//   }

//   set getHour(input) {
//     this.#hour = input;
//   }

//   get getMinute() {
//     if (this.#minute < 10) {
//       return `0${this.#minute}`;
//     }
//     return this.#minute;
//   }

//   set getMinute(input) {
//     this.#minute = input;
//   }

//   get getSecond() {
//     if (this.#second < 10) {
//       return `0${this.#second}`;
//     }
//     return this.#second;
//   }

//   set getSecond(input) {
//     this.#second = input;
//   }

//   nextSecond() {
//     if (this.#second == 59) {
//       this.#minute += 1;
//       this.#second = 0;
//     } else {
//       this.#second++;
//     }

//     if (this.#minute == 59) {
//       this.#hour++;
//       this.minute = 0;
//     }

//     return `${this.getHour}-${this.getMinute}-${this.getSecond}`;
//   }

//   previousSecond() {
//     if (this.#second == 0) {
//       this.#second--;
//       this.#second = 59;
//       this.#minute--;
//     } else {
//       this.second--;
//     }
//     return `${this.getHour}-${this.getMinute}-${this.getSecond}`;
//   }
// }

// let t1 = new Time(15, 15, 12);

// t1.getHour = 20;
// t1.getMinute = 4;
// t1.getSecond = 18;

// console.log(t1.getHour);
// console.log(t1.getMinute);
// console.log(t1.getSecond);
// console.log(t1.nextSecond());
// console.log(t1.previousSecond());

// ----- Class5 ----- //

// class Shape {
//   #color;
//   #filled;
//   constructor(color, filled) {
//     this.#color = color;
//     this.#filled = filled;
//   }

//   get getColor() {
//     return this.#color;
//   }
//   set setColor(input) {
//     this.#color = input;
//   }
//   get isFilled() {
//     return this.#filled;
//   }
//   set setFilled(input) {
//     this.#filled = input;
//   }

// }

// let sh1 = new Shape("blue", true);

// sh1.setColor = "white";
// sh1.setFilled = false;

// console.log(sh1.getColor);
// console.log(sh1.isFilled);

// class Circle extends Shape {
//   #radius;
//   constructor(color, filled, radius) {
//     super(color, filled);
//     this.#radius = radius;
//   }

//   get getRadius() {
//     return this.#radius;
//   }

//   set setRadius(input) {
//     this.#radius = input;
//   }

//   get area() {
//     return (Math.PI * (this.#radius ** 2)).toFixed(2);
//   }

//   get perimeter() {
//     return (2 * this.#radius * Math.PI).toFixed(2);
//   }
// }

// let c1 = new Circle("red", false, 3);

// console.log(c1.getRadius);
// console.log(c1.getColor);
// console.log(c1.area);
// console.log(c1.perimeter);

// class Rectangle extends Shape {
//   #width;
//   #height;
//   constructor(color, filled, width, height) {
//     super(color, filled, width, height);
//     this.#width = width;
//     this.#height = height;
//   }

//   get getWidth() {
//     return this.#width;
//   }

//   set setWidth(input) {
//     this.#width = input;
//   }

//   get getHeight() {
//     return this.#height;
//   }

//   set setHeight (input) {
//     this.#height = input;
//   }

//   get area() {
//     return this.#width * this.#height;
//   }

//   get perimeter() {
//     return 2 * (this.#height + this.#width);
//   }
// }

// let r1 = new Rectangle("black", true, 20, 40);

// console.log(r1.getHeight);
// console.log(r1.getWidth);
// console.log(r1.area);
// console.log(r1.perimeter);

// ----- Class6 ----- //

// class Person {
//   #name;
//   #address;
//   constructor(name, address) {
//     this.#name = name;
//     this.#address = address;
//   }

//   get getName () {
//     return this.#name;
//   }

//   set setName (input) {
//     this.#name = input;
//   }

//   get getAddress() {
//     return this.#address;
//   }

//   set setAddress(input) {
//     this.#address = input;
//   }
// }

// let p1 = new Person("Azamat", "Tashkent");

// p1.setName = "Abraev";
// p1.setAddress = "Termez";

// console.log(p1.getName);
// console.log(p1.getAddress);

// class Student extends Person {
//   #faculty;
//   #year;
//   #university;
//   constructor(name, address, faculty, year, university) {
//     super(name, address);
//     this.#faculty = faculty;
//     this.#year = year;
//     this.#university = university;
//   }

//   get getFaculty() {
//     return this.#faculty;
//   }

//   set setFaculty(input) {
//     this.#faculty = input;
//   }

//   get getYear() {
//     return this.#year;
//   }

//   set setYear(input) {
//     this.#year = input;
//   }

//   get getUniversity() {
//     return this.#university;
//   }

//   set setUniversity(input) {
//     this.#university = input;
//   }
// }

// let s1 = new Student("Azamat", "Tashkent City", "Computer Science", 2, "WIUT");

// // s1.setFaculty = "BIS";
// // s1.setYear = 3;
// // s1.setUniversity = "Westminster";

// console.log(s1.getFaculty);
// console.log(s1.getYear);
// console.log(s1.getUniversity);

// class Employee extends Person {
//   #salary;
//   #work;
//   constructor(name, address, salary, work) {
//     super(name, address);
//     this.#salary = salary;
//     this.#work = work;
//   }

//   get getSalary() {
//     return this.#salary;
//   }

//   set setSalary(input) {
//     this.#salary = input;
//   }

//   get getWork() {
//     return this.#work;
//   }

//   set setWork(input) {
//     this.#work = input;
//   }
// }

// let emp1 = new Employee("Azamat", "Tashkent", 2400, "Junior software engineer");

// emp1.setSalary = 2500;
// emp1.setWork = "Senior software engineer";

// console.log(emp1.getSalary);
// console.log(emp1.getWork);

// ----- Class7 ----- //

// class Animal {
//   constructor(name, speed, weight) {
//     this.name = name;
//     this.speed = speed;
//     this.weight = weight;
//   }
// }

// let an1 = new Animal("Wolf", 25, 50);

// console.log(an1.name);
// console.log(an1.speed);
// console.log(an1.weight);

// class Mammal extends Animal {
//   #legs;
//   constructor(name, speed, weight, legs) {
//     super(name, speed, weight);
//     this.#legs = legs;
//   }

//   get getLegs() {
//     return this.#legs;
//   }

//   set setLegs(input) {
//     this.#legs = input;
//   }

// }

// // let m1 = new Mammal("Bear", 30, 120, 4);

// // m1.setLegs = 5;

// // console.log(m1.getLegs);

// class Cat extends Mammal {
//   #sound;
//   constructor(name, speed, weight, legs, sound) {
//     super(name, speed, weight, legs);
//     this.#sound = sound;
//   }

//   get getSound() {
//     return this.#sound;
//   }
// }

// let cat1 = new Cat("Bagira", 20, 10, 4, "Meow");

// console.log(cat1.getSound);

// class Dog extends Mammal {
//   #sound;
//   constructor(name, speed, weight, legs, sound) {
//     super(name, speed, weight, legs);
//     this.#sound = sound;
//   }

//   get getSound() {
//     return this.#sound;
//   }
// }

// let dog1 = new Dog("Hatiko", 20, 10, 4, "Woof");

// console.log(dog1.getSound);

// class Fish extends Animal {
//   #size;
//   constructor(name, speed, weight, size) {
//     super(name, speed, weight);
//     this.#size = size;
//   }

//   get getSize() {
//     return this.#size;
//   }

//   set setSize(input) {
//     this.#size = input;
//   }
// }

// let fish1 = new Fish("Nemo", 15, 2, "small");

// fish1.setSize = "Medium";

// console.log(fish1.getSize);

// class Whale extends Fish {
//   #sound;
//   constructor(name, speed, weight, size, sound) {
//     super(name, speed, weight, size);
//     this.#sound = sound;
//   }

//   get getSound() {
//     return this.#sound;
//   }
// }

// let wh1 = new Whale("Biggy", 30, 500, "huge", "Poof");

// console.log(wh1.getSound);

// class Shark extends Fish {
//   #sound;
//   constructor(name, speed, weight, size, sound) {
//     super(name, speed, weight, size);
//     this.#sound = sound;
//   }

//   get getSound() {
//     return this.#sound;
//   }
// }

// let sh1 = new Shark("Theethy", 40, 300, "huge", "Sheef");

// console.log(sh1.getSound);

// ----- Class8 ----- //

// let obj = {
//   name: "Azamat",
//   lastName: "Abraev",
//   age: 20,
// };

// Object.customKeys = function () {
//   let res = [];
//   for (let key in obj) {
//     res.push(key);
//   }
//   return res;
// }

// Object.customValues = function () {
//   let res = [];
//   for (let key in obj) {
//     res.push(obj[key]);
//   }
//   return res;
// }

// Object.customEntries = function () {
//   let res = [];
//   let resInner = [];
//   for (let key in obj) {
//     resInner.push(key, obj[key]);
//   }
//   res.push(resInner);
//   return res;
// };

// console.log(Object.customKeys(obj));
// console.log(Object.customValues(obj));

// console.log(Object.entries(obj));
// console.log(Object.customEntries(obj));

// Number.customIsInteger = (n) => n % 1 == 0;

// console.log(Number.customIsInteger(2));

// let obj = {
//   name: "Azamat",
//   lastName: "Abraev",
// }

// let arr = [54, 76, 32];

// let str = "Whatever happens happens";

// Array.customIsArray = (input) => input instanceof Array;

// console.log(Array.customIsArray(arr));
// console.log(Array.isArray(arr));

// ----- Class9 ----- //

let arr = [5, 7, 4, 3];

// Array.isNumberArray = function (arr) {
//   for (let el of arr) {
//     if (typeof el !== "number") {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(Array.isNumberArray(arr));

// Array.sum = function (arr) {
//   let sum = 0;
//   for (let el of arr) {
//     sum += el;
//   }
//   return sum;
// }

// console.log(Array.sum(arr));

// Array.max = function (arr) {
//   let max = arr[0];
//   for (let el of arr) {
//     if (el > max) {
//       max = el;
//     }
//   }
//   return max;
// }

// console.log(Array.max(arr));

// Array.min = function (arr) {
//   let min = arr[0];
//   for (let el of arr) {
//     if (el < min) {
//       min = el;
//     }
//   }
//   return min;
// };

// console.log(Array.min(arr));

// ----- Class10 ----- //

// class Person {
//   constructor(housePrice, housesNumber, carPrice, carsNumber, bankAccount) {
//     this.housePrice = housePrice;
//     this.housesNumber = housesNumber;
//     this.carPrice = carPrice;
//     this.carsNumber = carsNumber;
//     this.bankAccount = bankAccount;
//   }

//   get getWealth() {
//     return (
//       this.housePrice * this.housesNumber +
//       this.carPrice * this.carsNumber +
//       this.bankAccount
//     );
//   }
// }

// let p1 = new Person(65000, 2, 23000, 1, 53000);

// // console.log(p1.getWealth);

// class RichPerson extends Person {
//   constructor(
//     housePrice,
//     housesNumber,
//     carPrice,
//     carsNumber,
//     bankAccount,
//     companyPrice,
//     companiesNumber,
//     investment
//   ) {
//     super(housePrice, housesNumber, carPrice, carsNumber, bankAccount);
//     this.companyPrice = companyPrice;
//     this.companiesNumber = companiesNumber;
//     this.investment = investment;
//   }

//   get getWealth () {
//     return this.getWealth + this.companyPrice * this.companiesNumber + this.investment;
//   }
// }


// let r1 = new Person(65000, 2, 23000, 1, 53000, 100000, 3, 34000);

// console.log(r1.getWealth);
