/* 1. Create an Author class and a Book class.
Author should have: name, email, gender. 
It should have appropriate getters and setters.
It should have a toString method.

Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit
from the book based on the price and quantity.
It should have a toString method. */
class Author {
  constructor(name,email,gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  
  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }
  
  get email() {
    return this._email;
  }
  
  set email(value) {
    this._email = value;
  }
  
  get gender() {
    return this._gender;
  }
  
  set gender(value) {
    this.sex = "";
    if(value === "female")  this.sex = "Her";
    if(value === "male")  this.sex = "His";
    this._gender = value;
  }
  
  toString = function() {
  return `Author- ${this._name}.Gender- ${this._gender}.${this.sex} email- ${this._email}.`;
} 
}
  
 
class Book {
	constructor(title,author,price,quantity) {
    this._title = title;
    this._author = this._author;
    this._price = price;
    this._quantity = quantity;
  }
  
  get title() {
    return this._title;
  }
  
  set title(value) {
    this._title = value;
  }
  
  get author() {
    return this._name;
  }
  
  set author(value) {
    this._author = value;
  }
  
  get price() {
    return this._price;
  }
  
  set price(value) {
    this._price = value;
  }
  
  get quantity() {
    return this._quantity;
  }
  
  set quantity(value) {
    this._quantity = value;
  }
  
  getProfit() {
    this.profit = this._quantity * this._price;
    return this.profit;
  }
  
  toString = function() {
	return `${this._author} sold the book "${this._title}".A total of ${this._quantity} copies sold.Profit- ${this.getProfit()}$`;
}
}


let author = new Author();
author.name = "Mher";
author.email = "mher.temuryan@gmail.com";
author.gender = "male";
console.log(author.toString());

let book = new Book("Boom in Programming",author);
book.author = "Mher";
book.price = 50;
book.quantity = 5;
console.log(book.toString());

/* 2. Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance,
if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract
the amount from the account balance and add it to the given anotherAccount and return the updated balance,
if amount is less than the balance, otherwise output “Amount exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond)
which gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method. */
class Account {
  constructor(id,name,balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
 
  get name() {
    return this._name;
  }
  
  set name(value) {
    this._name = value;
  }

  get balance() {
    return `Balance-${this._balance}`;
  }
  
  set balance(value) {
    this._balance = value;
  }
  
  credit(amount) {
    this._balance += amount;
    return this._balance;
  }
  
  debit(amount) {
    if(amount > this._balance) {
      return "Amount exceeded balance.";
    } else {
      this._balance -= amount;
      return `Balance(debit)-${this._balance}`;
    }
  }
  
}

let user = new Account(123,"Armen",500);
console.log(user.id);
console.log(user.name);
console.log(user.balance);
user.credit(200);
console.log(user.balance);
console.log(user.debit(100));
console.log(user.balance);


/* 3. Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().

Student is inherited from Person. It should have program(array of strings), year, fee.
It should have appropriate getters and setters. 
It should have method: passExam(program, grade). Student should contain the data about
its programs and exams. passExam will update that data, so if student passed all the 
exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.

Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters. 
It should have a toString method. */
class Person {
  consructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName =lastName;
    this.gender = gender;
    this.age = age;
  }
  
  get firstName() {
    return this._firstName;
  }
  
  set firstName(value) {
    this._firstName = value;
  }
   
  get lastName() {
    return this._lastName;
  }
  
  set lastName(value) {
    this._lastName = value;
  }
  
  get gender() {
    return this._gender;
  }
  
  set gender(value) {
    this._gender = value;
  }
    
  get age() {
    return this._age;
  }
  
  set age(value) {
    this._age = value;
  }
  
 toString() {
  return `I'm ${this._firstName} ${this._lastName}.I am a ${this._gender}.My age ${this._age}`;
}
}


class Student extends Person {
  constructor(firstName,lastName,gender,age,program,year,fee) {
    super(firstName,lastName,gender,age);
    this.program = program;
    this.year = 1;
    this.fee = fee;
  }

  get program() {
    return this._program;
  }
  
  set program(value) {
    this._program = value;
  }

  get fee() {
    return this._fee;
  }
  
  set fee(value) {
    this._fee = value;
  }
  
  passExams(...exam) {
  this.grade = exam.length*10;
  this._program = [];
  this._program.push(exam);
    if(this.grade === 50) this.year += 1;
  return `${this._firstName} pas exam ${exam},grade-${this.grade}.Year-${this.year}`;
}
  
  toString() {
  return `I'm ${this._firstName} ${this._lastName}.I am a student.I am a ${this._gender}.My age ${this._age}.Year-${this.year}`;
}
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age,program,pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }
  
  get program() {
    return this._program;
  }
  
  set program(value) {
    this._program = value;
  }
  
  get pay() {
    return this._pay;
  }
  
  set pay(value) {
    this._pay = value;
  }
  
  toString() {
  return `I'm ${this._firstName} ${this._lastName}.I'am a teacher.I am a ${this._gender}.My age ${this._age}.My salary- ${this._pay}$`;
}
}

let mher = new Person();
mher.firstName = "Mher";
mher.lastName = "Temuryan";
mher.gender = "man";
mher.age = 99;
console.log(mher.toString());

let teacher = new Teacher();
teacher.firstName = "Aram";
teacher.lastName = "Aramyan";
teacher.gender = "man";
teacher.pay = 550;
teacher.age = 28;
console.log(teacher.toString());

let student = new Student();
student.firstName = "Anna";
student.lastName = "Avagyan";
student.gender = "woman";
student.age = 19;
console.log(student.toString());
console.log(student.passExams("HTML","CSS","JS","React","Angular"));