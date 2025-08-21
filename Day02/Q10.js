// Sort an array in ascending order without using sort().

function sort(a){
    let n = a.length

    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n -1 -i; j++){
            if(a[j] > a[j+1]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }

    }

    return a
}
let num = [12,32,1,121,111,1222]
console.log(sort(num))