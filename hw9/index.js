let username = "Jane Doe";
// 12 + "12" = "1212" if at least one added as a string js converts non strings into strings & combines it together
let message1 = "Hi" + username;
console.log(message1); // ›HiJane Doe
let message2 = "Hi " + username + ", how are you?";
console.log(message2); // ›Hi Jane Doe, how are you?
// template literal ``
let message3 = `Hi ${username}, how are you?`;
// string interpalation ${...}
console.log(message3); //  Hi Jane Doe, how are you?
// another example
const weight = 50;
const moonWeight = `You weigh ${weight * 0.1667} kg on the moon`;
console.log(moonWeight); // ›You weigh 8.334999999999999 kg on the moon
// anothe task
'I'm a string';
"He said, "I am string."";
// 1 colution
'I\'m a string';
"He said, \"I am string.\"";
// 2 solution
// `I'm a string`;
// `He said, "I am string."`;
"This is a string \n that spans \r across three lines.";
// \n new line break, \r carrot returtn
// or just use tamplate string
const threeLines = `This is a string 
that spans across 
three lines.
`;
// Challenge: create "Luke I am your father" expression!
const son = "Luke";
const parentStatus = "father";
const expression = `${son}, I am your ${parentStatus}`;
console.log(expression);