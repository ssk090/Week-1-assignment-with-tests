/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverse(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function transform(str) {
    str = str.toLowerCase();
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] === " " || str[i] === "," || str[i] === "!" || str[i] === "." || str[i] === "?")) {
            answer += str[i];
        }
    }
    return answer;
}

function isPalindrome(str) {
    str = transform(str);
    return str === reverse(str);
}

module.exports = isPalindrome;
