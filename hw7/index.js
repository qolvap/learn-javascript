/*
User interaction – alert, confirm, prompt. 
Functions for creating modal windows alert(), confirm(), prompt(). 
A function in JS takes one or more parameters as input and returns a specific value. 
*/

/* 
alert() is a function to call a modal window in the browser that displays a message to the user. 
So, the code alert("Hello world"); 
will display a browser window and pause further script execution until the user clicks the "OK" button:
*/
alert("Simple example of using alert()!");
// another
let message = "Using alert() with the variable!";
alert(message);
/*
Function confirm() displays a modal window with question text and two buttons: OK and CANCEL. 
The execution result will be true if the OK button is pressed. In other cases — false.
*/
let isTheBiggest = confirm("Is he the biggest here?", ""); // optional second parameter is added "", sets the default value
console.log(isTheBiggest); // modal window shows this OK & cancel. Ok means true
// another
const userChoice = confirm("Are you sure you want to leave?");
if (userChoice) {
  alert("You`ve chosen to leave."); // if OK(true) pressed, show alert() info
} else {
  alert("You`ve chosen to stay."); // if CANCEL(false) pressed, show alert() info
}
/*
prompt() is a function that shows messages and requests for text input from the user. 
It returns the typed text in the input field, or null if the «Cancel» button was pressed or Esc from the keyboard.
*/
let yourName = prompt("Input your name", "");
if (yourName != null) {
  console.log("Your name is " + yourName);
} else {
  console.log("Cancel was pressed");
}
// another
const userAge = prompt("Please type Your age:");
alert(`Your age: ${userAge}`);
