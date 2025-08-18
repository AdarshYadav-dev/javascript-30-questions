// 5 Reverse a string without using built-in functions.
//   Use loops to manually reverse a given string.
//   "Input: 'hello'
//    Output: 'olleh'"


function reverse(s){
    let rev = "";
    for(let i = s.length-1; i>=0; i--){
        rev += s[i];
    }

    return rev;
}

console.log(reverse("adarsh"))