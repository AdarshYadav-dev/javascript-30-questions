// 3 Check if a number is even or odd.
//   Use modulo operator to determine even or odd numbers.
//   "Input: 7
//    Output: Odd" -->



function check(num){
    if(num%2 === 0){
        return "even number"
    }else{
        return "odd number"
    }
}

console.log(check(12))
