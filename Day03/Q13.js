// Merge two sorted arrays into a single sorted array.


function sortmerge(arr1, arr2){
    let merge = [];
    let i = 0, j = 0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            merge[merge.length]  = arr1[i]
            i++
        }else{
            merge[merge.length] = arr2[j]
            j++
        }
    }

    while(i < arr1.length){
        merge[merge.length] = arr1[i]
        i++
    }

    while(j < arr2.length){
        merge[merge.length] = arr2[j]
        j++
    }

    return merge;
}

let arr1 = [1,2,3,4];
let arr2 = [6,7,8,9]
console.log(sortmerge(arr1, arr2))