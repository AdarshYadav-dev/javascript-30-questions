// Remove duplicate elements from an array.


function duplicate(arr){
    let check= [];
    console.log("old user:-" ,arr)

    for(let i = 0; i<arr.length; i++){
        let match = false;

        for(let j = 0; j < check.length; j++){
            if(arr[i] === arr[j]){
                match = true;
                break;
            }
        }

        if(!match){
            check[check.length] = arr[i]
        }
    }

    return check;
}

console.log("new user:-", duplicate([12, 12, 11, 14]));
