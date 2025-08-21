// Count the number of vowels in a given string.

function check(a){
    let result = 0;
    let vowels = "aeiouAEIOU";

    // FormData()
    for(let i =0; i<a.length; i++){
        if(vowels.includes(a[i])){
            result++
        }
    }

    return result;
}

console.log(check("adarsh-yadav"))
