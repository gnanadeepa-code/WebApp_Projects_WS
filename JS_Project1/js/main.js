import earnMoney from "./main1.js"; //used to import functions from other js files
import { growMoney as grow, giveMoney as give } from "./main1.js";
import * as money from "./main1.js"; //* is used to import all the functions available in the main1.js file
import { Greeting, users } from "./main1.js";

//Modules
console.log("This is a JS file");
console.log(earnMoney());
console.log(grow());
console.log(give());
console.log(money.default()); //since earnMoney is given as default , here we cannot give its name directly, b
console.log(money.growMoney());
console.log(money.giveMoney());

const greet = new Greeting("Deepa");
console.log(greet.hello());

//Higher Order Functions (HOF) - Is a function that either takes one or more functions as arguments, returns a function as its result, or both. Function are treated as a datatype in js.
users.forEach((user) => {
  //Here forEach is a function where we are passing a arrow function as a paramenter inside
  console.log(user);
});
//console.clear; // clears the console

const filteredUsers = users.filter((user) => {
  //here filter is a fucntion where arrow function is passed as a parameter
  return user.id == 5;
});
console.log(filteredUsers);

const mappedUsers = filteredUsers.map((user) => {
  return user.name;
});
console.log(mappedUsers);

//String
let myVariable = "This is a document";
console.log(typeof myVariable);
console.log(myVariable.length);
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf("is"));
console.log(myVariable.lastIndexOf("is"));
console.log(myVariable.slice(5, 8));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("doc"));
console.log(myVariable.split(" "));

//Number
const myNumber = 33;
const myFloat = 33.01;
const myVar = "1266.4545325eer";
console.log(myNumber);
console.log(myNumber === myFloat);
console.log(Number(myVar));
console.log(Number("tt") + 34);
console.log(Number(true) + 34);
console.log(Number.isInteger(45));
console.log(Number.parseFloat(myVar).toFixed(3));
console.log(myFloat.toString());
console.log(Number.isNaN(67e34));
console.log(Number.isNaN(NaN));
console.log(isNaN("Deepa"));

//Math Properties
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.7));
console.log(Math.pow(3, 4));
console.log(Math.min(3, 4, 5, 6, 2));
console.log(Math.max(3, 4, 5, 6, 2));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1); //random nos from 1 to 10

let myName = "DEEPA";
let nlen = myName.length;
console.log(Math.random() * 5);
console.log(myName.charAt(Math.floor(Math.random() * nlen)));

//Conditional Statements - If (or ||, and &&) - order of the if stmts are important
let ans;
if (myName.endsWith("A") || myName.endsWith("a")) {
  ans = `Yes, the name ${myName} ends with a.`;
} else if (myName.endsWith("S") || myName.endsWith("s")) {
  ans = `No, the name ${myName} does not ends with s.`;
} else {
  ans = `No, the name ${myName} does not ends with a or s.`;
}
console.log(ans);

//Switch statements
let sVar = Math.floor(Math.random() * 4);
switch (sVar) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("No Match");
}

//Ternary Operator
const age = 21;
const voterStatus = age >= 18 ? "Voting Eligible" : "Voting not Eligible";
console.log(voterStatus);

let testscore = 90;
let grade =
  testscore > 89 ? "A" : testscore > 79 ? "B" : testscore > 69 ? "C" : "D";
console.log(grade);

//Rock-Paper-Scissor
let player = "paper";
let computer = "rock";
let result =
  player === computer
    ? "Tie"
    : player === "rock" && computer === "paper"
      ? "Computer Wins!"
      : player === "paper" && computer === "scissor"
        ? "Computer Wins!"
        : player === "scissor" && computer === "rock"
          ? "Computer Wins!"
          : "Player Wins!";
console.log(result);

//User Input
alert("Hi, Welcome to my website.");

let myBoolean = confirm("Good Day");
console.log(myBoolean);

let cusVar = prompt("What is your job?");
if (cusVar) {
  console.log(cusVar.trim() ?? "Job not described"); //Null coalescing is a JavaScript operator that uses ?? to choose a default value only when the left side is null or undefined.
} else {
  console.log("Job not described");
}

//Rock-Paper-Scissor using user input

let player1 = confirm("Shall we play Rock, Paper or Scissors ?");
if (player1) {
  let playerChoice = prompt("Please enter rock, paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computerOne =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
            ? "paper"
            : "scissors";

      /* let result = playerOne === computerOne ? "Tie game !" : playerOne === "rock" && computer === "paper" ? `Player: ${playerOne} \n Computer: ${computerOne} \n Computer Wins!` : playerOne === "paper" && computer === "scissor" ? `Player: ${playerOne} \n Computer: ${computerOne} \n Computer Wins!` : playerOne === "scissor" && computer === "rock" ? `Player: ${playerOne} \n Computer: ${computerOne} \n Computer Wins!` : `Player: ${playerOne} \n Computer: ${computerOne} \n Player Wins!` ; */

      console.log("Player choice :", playerOne);
      console.log("Computer choice :", computerOne);
      let result =
        playerOne === computerOne
          ? "Tie"
          : (playerOne === "rock" && computerOne === "paper") ||
              (playerOne === "paper" && computerOne === "scissors") ||
              (playerOne === "scissors" && computerOne === "rock")
            ? `Player: ${playerOne} \nComputer: ${computerOne} \nComputer Wins!`
            : `Player: ${playerOne} \nComputer: ${computerOne} \nPlayer Wins!`;

      console.log(result);

      alert(result);

      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Thanks for playing.");
    } else {
      alert("Please enter rock, paper or scissor.");
      location.reload();
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, we can play next time. Bye");
}

//Loops - While loop
let i = 1;
while (i <= 10) {
  console.log(i);
  if (i === 5) {
    break; //breaks the loop
  }
  i++;
}

//Do-While loop =>Runs atleast one time no matter the condition
let j = 50;
do {
  console.log(j);
  j++;
} while (j < 50);

//For loop
let name1 = "Deepa";
for (let i = 0; i <= name1.length; i++) {
  console.log(name1.charAt(i));
  for (let j = 0; j <= name1.length; j++) {
    if (j === 3) {
      continue; //skips the current iteration when j==3
    }
    console.log(i, j);
  }
}

//Functions - called when needed
let emailId = "dfgkdddddddfgdg@gmail.com";
//1.Function Declaration- commonly used, Can be called before it is defined
function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@")); //slice is inbuilt function
}

console.log(getUserNameFromEmail(emailId));

//2.Function Expression
const toProperCase = function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase(emailId));

//3.Arrow function - shorter version
const toProperCase1 = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const divide = (a, b) => a / b;

//Scope - lifetime of the variable, where can be used.
//var -> Scope is Global. Reassignable. Redeclarable. (less usable)
//let -> Scope is block level. Reassignable. Not Redeclarable in same scope.
//const -> Scope is block level.Not Reassignable. Not Redeclarable.

//Array
const myArray = [];
myArray[0] = "html";
myArray[1] = "css";
myArray[2] = 123;
myArray[3] = true;
myArray[4] = false;

console.log(myArray.length);
console.log(myArray[myArray.length - 1]);

myArray.push("js"); //adds elt at the last
myArray.pop(); //deletes the last elt
myArray.unshift("df"); //adds elt at the first
myArray.shift(); //deletes elt from the first
myArray.splice(2, 1, "ghh"); //2 -deletes the 2nd item , 1 - tells how many items to delete, "ghh" - ghh replaced in 2nd position
const newArray = myArray.slice(1, 3); //creates a copy of new array with 2 elts from index 1
newArray.reverse(); //reverses the array
const copyStr = myArray.join(); //creates a copy of strings separated by , instead of array

const newArray1 = myArray.concat(newArray); //combines both array as single array
const newArray2 = [...myArray, ...newArray]; //spread operator does the same job as concat
const dim2Array = [myArray, newArray]; //This is 2 dimensional array
console.log(dim2Array[1][1]);

//object- key-value pairs in curly braces
const myObj = { myName: "Deepa" };
console.log(myObj.myName);

const myObj1 = {
  num: 23,
  completed: false,
  frontend: { basic: "html", design: "css", action: "js" },
  action: function () {
    return "Hello World!";
  },
  action1: function () {
    return `Learn ${this.frontend.action}`;
  },
};
console.log(myObj1.frontend.basic);
console.log(myObj1.frontend["action"]);
console.log(myObj1.action());
console.log(myObj1.action1());

//Inheritance
const vehicle = {
  door: 3,
  engine: function () {
    return "sdsdgf-engine";
  },
};
console.log(vehicle.engine());

const car = Object.create(vehicle); //Inheriting Vehicle properties
car.wheels = 4;
car.engine = function () {
  //overriding the engine function
  return "dfgghh-engine";
};
console.log(car.door);
console.log(car.engine());

const tesla = Object.create(car); //Inheriting both car and vehicle
console.log(tesla.door);
console.log(tesla.engine());

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(tesla.hasOwnProperty("door")); // if tesla has door property, true will be returned
delete tesla.door; // deletes door property from tesla obj

const movie = {
  actor: "Vijay",
  music: "Anirudh",
  director: "Murugadoss",
  producer: "Anbu",
};

//For - In loop
for (let parts in car) {
  console.log(car[parts]);
}

//destructuring the objects
const { actor: myFavActor, director: myFavDir } = movie; //Here actor value from movie is set to myFavActor var
console.log(myFavActor, myFavDir);
const { actor, music, director, producer } = movie; // now actor,music,director,producer becomes variables since the names are same as obj and corresponding values will be assigned from movie obj;
console.log(music);

function hero({ actor }) {
  return `The hero of this movie is ${actor}`;
} //if {} is not added in the parameter the whole obj will be displayed
console.log(hero(movie));

//classes
const myDosa = {
  size: "medium",
  flavor: "masala",
  cook: function () {
    return console.log(`Cooking a ${this.size} ${this.flavor} variety Dosa.`);
  },
};
myDosa.cook();

//Class acts as a blueprint to create an object
class Dosa {
  constructor(dosaType, dosaSize, dosaFlavor) {
    this.type = dosaType;
    this.size = dosaSize;
    this.flavor = dosaFlavor;
    this.toppings = ["onion"];
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(toppings) {
    this.toppings.push(toppings);
  }
  cook() {
    return console.log(
      `Cooking a ${this.size} size ${this.flavor} flavour ${this.type} dosa with ${this.toppings} toppings.`,
    );
  }
}
const dosa1 = new Dosa("Special", "small", "masala");
dosa1.cook();
console.log(dosa1.size);

const dosa2 = new Dosa("Normal", "medium", "ghee");
dosa2.setToppings("Tomato");
dosa2.setToppings("Cheese");
dosa2.cook();

//Class Inheritance
class SpecialDosa extends Dosa {
  //Inheriting Dosa characteristics into SpecialDosa
  constructor(dosaType, dosaSize, dosaFlavor) {
    super(dosaType, dosaSize, dosaFlavor); //super class constructor should be initialized first before child class constructor properties
    this.dosaShape = "Heart"; // child class constructor property
  }
  presentation() {
    console.log(
      `Your desired dosa shape is ${this.dosaShape} with toppings ${this.toppings}`,
    );
  }
}

const splDosa = new SpecialDosa("Special", "large", "mint");
splDosa.presentation();

//Factory Function -Is a JavaScript function that creates and returns objects. It is like a blueprint or template for making multiple objects without using classes or the new keyword. Factory Functions can be used instead of classes becoz the data cannot be changed from outside like in classes. Factory Function provides data privacy

function createCar(brand, model, year) {
  return {
    brand: brand,
    model: model,
    year: year,
    info: function () {
      return `${this.year} ${this.brand} ${this.model}`;
    },
  };
}

const car1 = createCar("Toyota", "Camry", 2020);
const car2 = createCar("Honda", "Civic", 2022);

console.log(car1.info()); // 2020 Toyota Camry
console.log(car2.info()); // 2022 Honda Civic

//Arrow functions
const createUser = (name, email) => ({
  name,
  email,
  displayInfo: function () {
    return `${this.name} - ${this.email}`;
  },
});

const user1 = createUser("Deepa", "deepa@gmail.com");
console.log(user1.displayInfo()); // Deepa - deepa@gmail.com

//class using private datas - using factory mtds we cannot access the variables at all, to solve this problem # is introduced to make the properties as private in classes which cannot be accessed from outside
class BankAccount {
  #balance; // private
  #pin; // private
  accountHolder; // public

  constructor(holder, balance, pin) {
    this.accountHolder = holder;
    this.#balance = balance; //The # makes code safer by preventing direct access to sensitive information.
    this.#pin = pin;
  }

  // only way to access balance
  getBalance() {
    return this.#balance;
  }

  withdraw(amount, pin) {
    if (pin === this.#pin) {
      this.#balance -= amount;
      return `Withdrawn: ${amount}`;
    }
    return "Wrong PIN!";
  }
}

const account = new BankAccount("Deepa", 5000, 1234);
console.log(account.accountHolder); // "Deepa" (public - works)
console.log(account.getBalance()); // 5000 (through method - works)
console.log(account.withdraw(1000, 1234)); // 5000 (through method - works)
//console.log(account.#balance);       // Error! Private field

//JSON - JavaScript Object Notation. This is text format to send and receive data to server side in many programming languages since it is language independent
//JSON is essential for working with APIs, saving data, and sending information between servers and browsers.

// 1. Create a JavaScript object
const course = {
  id: 101,
  title: "JavaScript Basics",
  instructor: "Deepa",
  price: 99.99,
  students: ["Alice", "Bob", "Charlie"],
  isActive: true,
};

// 2. Convert to JSON (for sending to server)
const jsonData = JSON.stringify(course);
console.log(jsonData);

// 3. Send to API or save to file
// fetch('/api/courses', { method: 'POST', body: jsonData });

// 4. Receive JSON from server
const receivedJSON =
  '{"id":101,"title":"JavaScript Basics","instructor":"Deepa","price":99.99,"students":["Alice","Bob","Charlie"],"isActive":true}';

// 5. Convert back to object
const courseData = JSON.parse(receivedJSON);
console.log(courseData.title); // JavaScript Basics
console.log(courseData.students[0]); // Alice

//Errors and Error Handling
//Errors in JavaScript happen when something goes wrong in code. Error handling catch and manage these errors gracefully.
//1. Syntax Error - Mistake in code structure — caught before running:
//2. Reference Error - Using a variable that doesn't exist:
//3. Type Error - Wrong data type operation:
//4. Range Error - Invalid range:

("use strict"); //strict is used to follow the rules strictly in js, so easy to catch type errors.

try {
  // Code that might cause an error
  let result = 10 / 0; // No error - valid
  console.log(result); // Infinity
} catch (error) {
  // Runs if error occurs
  console.log("An error occurred:", error.message);
} finally {
  // Always runs (cleanup code)
  console.log("This runs no matter what");
} //Without try-catch, the program crashes here.

//Use throw to create your own custom errors:
function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age < 18) {
    throw new Error("Must be 18 or older");
  }
  return "Age is valid";
}

try {
  console.log(validateAge(-5));
} catch (error) {
  console.log("Error:", error.message); // Error: Age cannot be negative
}

//Document Object Model (DOM)
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2"); //to indicate that view2 is ID we need to mention # before id name
console.log(view2);

view1.style.display = "flex"; //used to override the styles which are set in style.css
view2.style.display = "flex";

const views = document.getElementsByClassName("view");
console.log(views);
const views1 = document.querySelectorAll(".view"); // . is used to select class
console.log(views1);

const divs = view1.querySelectorAll("div"); //view1 has already selected section from that we are again selecting div
console.log(divs);
const divs1 = view1.getElementsByTagName("div");
console.log(divs1);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

//Using the index to access the element
/* for (let i in evenDivs){
    evenDivs[i].style.backgroundColor="purple";  // Access element using index
    console.log(i);
} */

// Using for...of loop (Better)
/* for (let element of evenDivs){
    element.style.backgroundColor="purple";  // element is the actual DOM object
    console.log(element);
} */

//Using forEach (Modern)
evenDivs.forEach((element) => {
  element.style.backgroundColor = "purple";
  console.log(element);
});

console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World"; //changes the text in Nav

const navtext2 = document.querySelector("nav").innerText;
console.log(navtext2);

const navtext3 = document.querySelector("nav"); //innerHTML is used to get the content of the element along with the HTML tags
navtext3.innerHTML = "<p>This is a JS Document</p>";
navtext3.style.justifyContent = "center";

view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";
view2.lastElementChild.remove(); //removes the last child elt

const createDiv = (parent, content) => {
  //Arrow function to create new divs dynamically in js
  const newDiv = document.createElement("div");
  newDiv.textContent = content;
  newDiv.style.color = "white";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.backgroundColor = "green";
  newDiv.style.display = "flex";
  newDiv.style.flexDirection = "column";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.margin = "6px";
  parent.append(newDiv);
};

for (let i = 1; i <= 6; i++) {
  createDiv(view2, i);
}

//Event Listeners

const view3 = document.querySelector("#view3");
const div = view3.querySelector("div");
const h2 = div.querySelector("h2");

const clickEvent = () => {
  alert("Click event listener");
};

h2.addEventListener("click", clickEvent, false);
//h2.removeEventListener("click",clickEvent,false); //This removes the eventlistener

h2.addEventListener("click", (cli) => {
  cli.target.textContent = "Event completed";
});

document.addEventListener("readystatechange", (func) => {
  if (func.target.readyState == "complete") {
    console.log("complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view3");
  view.addEventListener("click", (cli) => {
    // view.style.backgroundColor="pink";
    view.classList.add("view3"); //here a new class .view3 will be added to section along with existing .view class
    //view.classList.remove("view");
    view.classList.toggle("view1"); //If we give toggle the class view1 and view2 will switch alternatively on each click
    view.classList.toggle("view2");
  });

  const div = view.querySelector("div");
  div.addEventListener("click", (cli) => {
    view.style.backgroundColor = "blue";
  });

  const h2 = div.querySelector("h2");
  h2.addEventListener(
    "click",
    (cli) => {
      cli.stopPropagation(); //This will avoid bubbling up/down of the events
      const myText = cli.target.textContent;
      myText === "Clicked"
        ? (cli.target.textContent = "Unclicked")
        : (cli.target.textContent = "Clicked");
    },
    true, //when useCapture=false (3rd parameter) event bubbling up will happen, where if h2 is clicked div and section will change its colour
  ); //when useCapture=true (3rd parameter) event bubbling down will happen, where if h2 is clicked, first section, div and h2 will change downwards

  /*   nav.addEventListener("mouseover", (eve) => {
    eve.currentTarget.classList.add("height100");
    console.log("mouseover"+eve.target);
  });
  nav.addEventListener("mouseout", (eve) => {
    eve.currentTarget.classList.remove("height100");
    console.log("mouseout"+eve.target);
  }); */

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    nav.classList.add("height100");
  });

  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("height100");
  });

  const view4 = document.querySelector("#view4");
  const myForm = view4.querySelector("#myForm");
  myForm.addEventListener("submit", (event) => {
    event.preventDefault(); //This mtd prevents the default behaviour of submitting the text i/p when Enter button is clicked. Becoz we need to validate the data before submitting it to DB.
    console.log("Submit Event");
  });

  //Web Storage API
  const myContent = ["Earn", "Grow", "Give"];
  const myObject = {
    name: "Website",
    myContent: ["Earn", "Grow", "Give"],
    logName: function () {
      console.log(this.name);
    },
  };
  window.sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
  /* window.localStorage.setItem("mySessionStore1", JSON.stringify(myObject)); */ //localStorage stores the data in local machine so even if browser closed the data available in local
  //window.localStorage.removeItem("mySessionStore1"); //removes the data
  const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
  console.log(mySessionData);
};

//Asynchoronous JS
console.log("First");
setTimeout(() => {
  console.log("Second", 2000); //Timer is set to delay
});
console.log("Third"); //Since timer is set for the above console.log "second" is printed after "Third"

//callback functions - functions inside another function is hell, this is not practised now and not good practice

//Promises used for Async js - 3 states : Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved the promise.");
  } else {
    reject("No! rejected the promise.");
  }
});
console.log(myPromise); //returns the state of the promise as fulfilled
myPromise.then((value) => {
  return value + "welcome"
}).then(newValue => console.log(newValue)).catch(err=>{console.log(err)})