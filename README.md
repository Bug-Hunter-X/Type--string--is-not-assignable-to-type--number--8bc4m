# Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript error: type mismatch.

The `add` function is defined to accept two numbers as arguments and return their sum. However, the example code attempts to call this function with a number and a string. TypeScript's type system correctly identifies this as an error because the string cannot be implicitly converted to a number.

The solution involves explicitly converting the string to a number using `parseInt()` before calling the `add` function or changing the function signature to accept strings.