// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

function addToZero(arr) {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length; k++){
            if(arr[i] + arr[k] === 0){
                count++
            }
        }
    }
    if (count > 0){
        return true
    }
    return false
   
}


console.log(addToZero([])) // -> False
console.log(addToZero([1])) // -> False
console.log(addToZero([1, 2, 3])) // -> False
console.log(addToZero([1, 2, 3, -2])) // -> True

//runtime complexity: O(n^2)
//space complexity: O(1)

console.log('-----------------------')

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word) {
    return new Set(word).size === word.length
}

console.log(hasUniqueChars("Monday")) // -> True
console.log(hasUniqueChars("Moonday")) // -> False

//runtime complexity: O(1)
//space complexity: O(1)


console.log('-----------------------')

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.” Write a function to check a sentence to see if it is a pangram or not.

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")

function isPangram(string) {
    string = string.toLowerCase();
    return alphabet.every(x => string.includes(x));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!")) // -> True
console.log(isPangram("I like cats, but not mice")) // -> False

//runtime complexity: O(n)
//space complexity: O(1)

console.log('-----------------------')

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWordLength(arr) {
    let str = arr.toString()
    str=str.split(",");
    let longest = str[0];
    for(let i =1 ; i<str.length; i++){
      if(str[i].length >longest.length){
        longest = str[i]
      }
    }
    return longest.length;
  }

console.log(findLongestWordLength(["hi", "hello"]))// -> 5

//runtime complexity: O(n)
//space complexity: O(n)