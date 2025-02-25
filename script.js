let a = [1, 2, 3, 4]; 
 console.log(a)

 let colors = ["red", "green", "blue"]; 
 console.log(colors);



//  prompt("Enter a number:");



// prompt("Enter another number:");

alert("The sum is: " + (parseInt(prompt("Enter a number:")) + parseInt(prompt("Enter another number:"))));

document.getElementById("consoleButton").addEventListener("click", function() {
    alert("Press F12 or Ctrl+Shift+I to open the console.");
    console.log("[1, 2, 3, 4]");
});


