const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter operation (+, -, *, /): ', (operation) => {
  readline.question('Enter first number: ', (num1Str) => {
    const num1 = parseFloat(num1Str);
    if (isNaN(num1)) {
      console.error('Invalid first number');
      readline.close();
      return;
    }

    readline.question('Enter second number: ', (num2Str) => {
      const num2 = parseFloat(num2Str);
      if (isNaN(num2)) {
        console.error('Invalid second number');
        readline.close();
        return;
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
            readline.close();
            return;
          }
          result = num1 / num2;
          break;
        default:
          console.error('Invalid operation');
          readline.close();
          return;
      }

      fs.writeFile('success.txt', `The result of ${operation} is: ${result}`, (err) => {
        if (err) console.error(err);
        else console.log('Result written to success.txt');
        readline.close();
      });
    });
  });
});
