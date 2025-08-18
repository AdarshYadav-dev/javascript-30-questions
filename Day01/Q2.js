// 2. Swap two variables without using a third variable.
//    Swap values of two variables without using a temporary variable.
//    "Input: a = 5, b = 10
//     Output: a = 10, b = 5"


let a = 5;
let b = 10;

a = a + b; 
b = a - b; 
a = a - b; 

console.log(a, b);
