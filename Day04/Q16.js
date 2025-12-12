// Reverse the words in a sentence without reversing the characters.

// Reverse the order of words in a sentence while keeping letters intact.

// Input: 'hello world'
// Output: 'world hello'



function reverseWords(str) {
    let result = "";
    let word = "";

    for (let i = str.length - 1; i >= 0; i--) {

        if (str[i] !== " ") {
            word = str[i] + word;  
        } 
        else {
            if (word.length > 0) {
                result += word + " ";
                word = "";
            }
        }
    }

    if (word.length > 0) {
        result += word;
    }

    return result;
}


console.log(reverseWords("hello world"));