let a = [1, 2, 3, 4]; 
 console.log(a)

 let name = "Ali";
 let age = 25;
 let isStudent = true;

 console.log("Name: ", name);
 console.log("Age :", age);
 console.log("Is Student:", isStudent);


// Converting "100" (string) to a number
let numberValue = Number("100");

// Converting "true" (string) to a boolean
let booleanValue = Boolean("true");

// Printing results in the console
console.log("Converted Number:", numberValue);
console.log("Converted Boolean:", booleanValue);


//  let colors = ["red", "green", "blue"]; 
//  console.log(colors);

//  prompt("Enter a number:");

// prompt("Enter another number:");

// alert("The sum is: " + (parseInt(prompt("Enter a number:")) + parseInt(prompt("Enter another number:"))));

// document.getElementById("consoleButton").addEventListener("click", function() {
//     alert("Press F12 or Ctrl+Shift+I to open the console.");
//     console.log("[1, 2, 3, 4]");
// });


// Taking two numbers as input from the user
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// Performing arithmetic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Displaying results using alert()
alert(`Sum: ${sum}\n Difference: ${difference}\n Product: ${product}\n Quotient: ${quotient}`);



// Declare variables with null and undefined
let nullVariable = null;
let undefinedVariable;

// Print both values
console.log("nullVariable:", nullVariable);
console.log("undefinedVariable:", undefinedVariable);

/*
Difference:
null.. is an assigned value that represents the intentional absence of an object.
undefined.. means a variable has been declared but has not been assigned a value.
*/


// Take two boolean values from the user
let bool1 = prompt("Enter first boolean value (true/false):") === "true";
let bool2 = prompt("Enter second boolean value (true/false):") === "true"; 

// Perform logical operations
console.log(`AND (&&): ${bool1 && bool2}`);
console.log(`OR (||): ${bool1 || bool2}`);
console.log(`NOT (!bool1): ${!bool1}`);
console.log(`NOT (!bool2): ${!bool2}`);
