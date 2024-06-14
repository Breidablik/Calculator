const fs = require('fs');

const operation = process.argv[2];
const num1Str = process.argv[3];
const num2Str = process.argv[4];

const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Invalid numbers');
  process.exit(1);
}

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
      process.exit(1);
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
