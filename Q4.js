// 4 Find the largest of three numbers.
//   Use conditional statements to find the largest number.
//   "Input: 3, 9, 5
//    Output: 9"


function check(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b
    }else{
        return c
    }
}

console.log(check(23,43,45));