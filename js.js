// Task 1

// Declare three variables: a, b, and c.

/* a has the value 3
b has the value 5
c is declared but not assigned a value
*/

let a = 3;
let b = 5;
let c;



/* Print the result of each expression listed below, one after another. All output must be printed in the browser console.

Each printed line must include:
a short description of the expression
the result of the expression
You must concatenate everything into one long output:
either by using "\n" to create new lines
or by using template literals (backticks) and variable interpolation
Use the following template format for each expression:
*/

// console.log("description of expression: " + result);

/* Evaluate and print the following expressions:
a + b
a - b
a * b
a / b
a % b
a += b
a -= b
a *= b
a /= b
a %= b
a == b
a != b
a > b
a < b
!a && !c
!a || !c
*/

let output = "";

output += "a + b: " + (a + b) + "\n";
output += "a - b: " + (a - b) + "\n";
output += "a * b: " + (a * b) + "\n";
output += "a / b: " + (a / b) + "\n";
output += "a % b: " + (a % b) + "\n";

output += "a += b:" + (a += b) + "\n"
output += "a -= b:" + (a -= b) + "\n"
output += "a *= b: " + (a *= b) + "\n";
output += "a /= b: " + (a /= b) + "\n";
output += "a %= b: " + (a %= b) + "\n";

output += "a == b: " + (a == b) + "\n";
output += "a != b: " + (a != b) + "\n";
output += "a > b: " + (a > b) + "\n";
output += "a < b: " + (a < b) + "\n";

output += "!a && !c: " + (!a && !c) + "\n";
output += "!a || !c: " + (!a || !c);

console.log(output);

// Task 2

// Declare the following variables:

/* first_name and assign it your first name
last_name and assign it your last name
email and assign it your email address
output
*/

let first_name = "Stephanie";
let last_name = "Ryan";
let email = "ryan0344@algonquinlive.com";


/* Create an expression that concatenates the variables and string literals to produce the following sentence:*/

/*My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.
You may use either:
string concatenation with the + operator
or template literals (backticks) with variable interpolation
Assign the final result to the variable output.*/

output =
  "My name is " + first_name + " " + last_name +
  ". You can contact me at " + email + ".";

/* Print output in the browser console using console.log().
 */
console.log(output);