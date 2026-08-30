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