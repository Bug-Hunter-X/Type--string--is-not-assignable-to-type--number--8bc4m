function add(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): number {
  return parseInt(a) + parseInt(b);
}

let result1 = add(1, 2); // Correct: both arguments are numbers
let result2 = addStrings('1', '2'); // Correct: handles string inputs and converts them to numbers
let result3 = add(1, parseInt('2')); //Correct: converts string to number before calling function
console.log(result1, result2, result3); // Output: 3 3 3