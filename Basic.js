JavaScript
const fs = require('fs');

const operation = process.argv[2]; // Get operation (+, -, *, /)
const num1 = parseFloat(process.argv[3]); // Get first number
const num2 = parseFloat(process.argv[4]); // Get second number

let result;

switch (operation) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.error('Division by zero error');
      process.exit(1); // Exit with error code
    }
    result = num1 / num2;
    break;
  default:
    console.error('Invalid operation');
    process.exit(1);
}

fs.writeFile('success.txt', `The result of ${operation} is: ${result}`, (err) => {
  if (err) console.error(err);
  else console.log('Result written to success.txt');
});
