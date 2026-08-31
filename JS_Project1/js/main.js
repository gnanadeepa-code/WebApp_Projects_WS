console.log("This is a JS file");
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
let i=1;
while(i<=10){
    console.log(i);
    if(i===5){
        break; //breaks the loop
    }
    i++;
}

//Do-While loop =>Runs atleast one time no matter the condition
let j=50;
do{
    console.log(j);
    j++;
}while(j<50)

//For loop
let name1="Deepa";
for(let i=0;i<=name1.length;i++){
    console.log(name1.charAt(i));
    for(let j=0;j<=name1.length;j++){
        if(j===3){
            continue; //skips the current iteration when j==3
        }
        console.log(i,j);
    }
}

//Functions - called when needed
let emailId="dfgkdddddddfgdg@gmail.com";
//1.Function Declaration- commonly used, Can be called before it is defined
function getUserNameFromEmail(email){
    return (email.slice(0,email.indexOf("@"))); //slice is inbuilt function
}
 
console.log(getUserNameFromEmail(emailId));

//2.Function Expression
const toProperCase = function (name){
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
}
console.log(toProperCase(emailId));

//3.Arrow function - shorter version
const toProperCase1 = (name) =>  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

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
const myArray =[];
myArray[0]="html";
myArray[1]="css";
myArray[2]=123;
myArray[3]=true;
myArray[4]=false;

console.log(myArray.length);
console.log(myArray[myArray.length-1]);

myArray.push("js");//adds elt at the last
myArray.pop();//deletes the last elt
myArray.unshift("df");//adds elt at the first
myArray.shift();//deletes elt from the first
myArray.splice(2,1,"ghh");//2 -deletes the 2nd item , 1 - tells how many items to delete, "ghh" - ghh replaced in 2nd position
const newArray = myArray.slice(1,3);//creates a copy of new array with 2 elts from index 1
newArray.reverse();//reverses the array
const copyStr = myArray.join();//creates a copy of strings separated by , instead of array

const newArray1 = myArray.concat(newArray);//combines both array as single array
const newArray2 = [...myArray,...newArray];//spread operator does the same job as concat
const dim2Array = [myArray,newArray]; //This is 2 dimensional array
console.log(dim2Array[1][1]); 

//object- key-value pairs in curly braces
const myObj = {myName:"Deepa"};
console.log(myObj.myName);

const myObj1= {num:23, completed:false, frontend:{basic:"html",design:"css",action:"js"}, action:function(){
    return "Hello World!";
}, action1:function(){
    return `Learn ${this.frontend.action}`;
}};
console.log(myObj1.frontend.basic);
console.log(myObj1.frontend["action"]);
console.log(myObj1.action());
console.log(myObj1.action1());

//Inheritance
const vehicle = {
    door:3,
    engine:function(){
        return "sdsdgf-engine";
    }
};
console.log(vehicle.engine());

const car =Object.create(vehicle);//Inheriting Vehicle properties
car.wheels = 4;
car.engine = function(){ //overriding the engine function
    return "dfgghh-engine"; 
}
console.log(car.door);
console.log(car.engine());

const tesla = Object.create(car); //Inheriting both car and vehicle
console.log(tesla.door);
console.log(tesla.engine());

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(tesla.hasOwnProperty("door"));// if tesla has door property, true will be returned
delete tesla.door; // deletes door property from tesla obj

const movie = {
    actor: "Vijay",
    music:"Anirudh",
    director:"Murugadoss",
    producer: "Anbu"
};

//For - In loop
for(let parts in car){
    console.log(car[parts]);
}

//destructuring the objects
const {actor:myFavActor, director:myFavDir} = movie; //Here actor value from movie is set to myFavActor var
console.log(myFavActor,myFavDir);
const {actor,music,director,producer} = movie; // now actor,music,director,producer becomes variables since the names are same as obj and corresponding values will be assigned from movie obj;
console.log(music);

function hero({actor}){
    return `The hero of this movie is ${actor}`
};//if {} is not added in the parameter the whole obj will be displayed
console.log(hero(movie));

//classes
const myDosa = {
    size: "medium",
    flavor: "masala",
    cook: function(){
        return console.log(`Cooking a ${this.size} ${this.flavor} variety Dosa.`);
    }
};
myDosa.cook();

//Class acts as a blueprint to create an object
class Dosa {
    constructor(dosaType, dosaSize, dosaFlavor){
        this.type = dosaType;
        this.size = dosaSize;
        this.flavor= dosaFlavor;
        this.toppings=["onion"];
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(toppings){
        this.toppings.push(toppings);
    }
    cook(){
         return console.log(`Cooking a ${this.size} size ${this.flavor} flavour ${this.type} dosa with ${this.toppings} toppings.`);
    }
}
const dosa1 = new Dosa("Special","small","masala");
dosa1.cook();
console.log(dosa1.size);

const dosa2 = new Dosa("Normal","medium","ghee");
dosa2.setToppings("Tomato");
dosa2.setToppings("Cheese");
dosa2.cook();

//Class Inheritance
class SpecialDosa extends Dosa { //Inheriting Dosa characteristics into SpecialDosa
    constructor(dosaType, dosaSize, dosaFlavor){
        super(dosaType, dosaSize, dosaFlavor); //super class constructor should be initialized first before child class constructor properties
        this.dosaShape= "Heart";// child class constructor property
    }
    presentation(){
        console.log(`Your desired dosa shape is ${this.dosaShape} with toppings ${this.toppings}`);
    }
}

const splDosa= new SpecialDosa("Special","large","mint");
splDosa.presentation();

//Factory Function -Is a JavaScript function that creates and returns objects. It is like a blueprint or template for making multiple objects without using classes or the new keyword. Factory Functions can be used instead of classes becoz the data cannot be changed from outside like in classes. Factory Function provides data privacy

function createCar(brand, model, year) {
  return {
    brand: brand,
    model: model,
    year: year,
    info: function() {
      return `${this.year} ${this.brand} ${this.model}`;
    }
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
  displayInfo: function() {
    return `${this.name} - ${this.email}`;
  }
});

const user1 = createUser("Deepa", "deepa@gmail.com");
console.log(user1.displayInfo()); // Deepa - deepa@gmail.com

//class using private datas - using factory mtds we cannot access the variables at all, to solve this problem # is introduced to make the properties as private in classes which cannot be accessed from outside
class BankAccount {
  #balance;     // private
  #pin;         // private
  accountHolder;  // public

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
console.log(account.accountHolder);  // "Deepa" (public - works)
console.log(account.getBalance());   // 5000 (through method - works)
//console.log(account.#balance);       // Error! Private field