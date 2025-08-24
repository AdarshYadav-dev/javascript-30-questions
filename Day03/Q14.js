// Write a function that returns the Fibonacci series up to n numbers.


function fibonacci(n) {
    let a = 0, b = 1;
    let count = [];     

    for (let i = 0; i < n; i++) {
        count[i] = a;    
        let c = a + b;    
        a = b;
        b = c;
    }

    return count;
}

console.log(fibonacci(10));