// Find the second largest number in an array.

function secoundBigNum(arr){
    let num1 = -Infinity;
    let num2 = -Infinity;

    for(let i = 0; i<arr.length; i++){
        if(arr[i] > num1){
            num2 = num1;
            num1 = arr[i];
        }else if(arr[i] > num2 && arr[i] < num1){
            num2 = arr[i]
        }
    }

    if(num2 === -Infinity){
        return null;
    }else{
        return num2
    }
}

let arr = [234,234,234,234,234,34,3242432,3452345];
console.log(secoundBigNum(arr))
