// Find the most frequently occurring character in a string.

// Find the most frequent character in a given string.

// Input: 'hello'
// Output: 'l'


function frequentlyCheck(str) {
    let maxCount = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count = count + 1;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            result = str[i];
        }
    }

    return result;
}

console.log(frequentlyCheck("hello"))
