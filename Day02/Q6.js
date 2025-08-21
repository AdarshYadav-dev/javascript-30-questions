// Check if a string is a palindrome.


function check(a){
    let result = "";
    for(let i = a.length-1; i>=0; i--){
        result += a[i];
    }
    return a === result
}

console.log(check("adarsh"))
