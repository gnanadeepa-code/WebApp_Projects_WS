console.log("This is a JS file");
//String
let myVariable = "This is a document";
console.log(typeof(myVariable));
console.log(myVariable.length);
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf("is"));
console.log(myVariable.lastIndexOf("is"));
console.log(myVariable.slice(5,8));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("doc"));
console.log(myVariable.split(" "));

//Number
const myNumber = 33;
const myFloat= 33.01;
const myVar="1266.4545325eer";
console.log(myNumber);
console.log(myNumber===myFloat);
console.log(Number(myVar));
console.log(Number("tt")+34);
console.log(Number(true)+34); 
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
console.log(Math.pow(3,4));
console.log(Math.min(3,4,5,6,2));
console.log(Math.max(3,4,5,6,2));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1); //random nos from 1 to 10

let myName="DEEPA";
let nlen=myName.length;
console.log(Math.random()*5);
console.log(myName.charAt(Math.floor(Math.random()*nlen)));

//Conditional Statements - If (or ||, and &&) - order of the if stmts are important
let ans;
if (myName.endsWith('A') || myName.endsWith('a')){
    ans = `Yes, the name ${myName} ends with a.`;
}else if (myName.endsWith('S') || myName.endsWith('s')){
    ans = `No, the name ${myName} does not ends with s.`;
}else{
    ans = `No, the name ${myName} does not ends with a or s.`;
}
console.log(ans);

//Switch statements
let sVar= Math.floor(Math.random()*4);
switch (sVar){
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
const age=21;
const voterStatus = age>=18 ? "Voting Eligible" : "Voting not Eligible";
console.log(voterStatus);

let testscore = 90;
let grade = testscore>89 ? "A" : testscore > 79 ? "B" : testscore>69 ? "C" : "D";
console.log(grade);

