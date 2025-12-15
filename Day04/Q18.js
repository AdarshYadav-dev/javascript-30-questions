// Check if two arrays are equal (same elements in any order).

// Compare two arrays to check if they contain the same elements.

// Input: [1,2,3], [3,2,1]
// Output: true


function check(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let count = {};

    for(let i = 0; i < arr1.length; i++){
        let val = arr1[i];
        if(count[val] === undefined) {
            count[val] = 1;
        }else{
            count[val]++
        }
    }

    for(let i = 0; i < arr2.length; i++){
        let val = arr2[i];
        if(count[val] === undefined || count[val] === 0) {
            return false;
        }else{
            count[val]--
        }
    }

    return true;
}

console.log(check([1,2,3,4], [3,2,4,1]))