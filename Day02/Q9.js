// Write a function to return the sum of all elements in an array.

function sum(s){
    let result = 0;

    for(let i = 0; i<s.length; i++){
        result += s[i]
    }
    return result;
}

console.log(sum([1,2,3,4,5,56]))