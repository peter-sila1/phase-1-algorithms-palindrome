function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}
console.log(isPalindrome('abba'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('robot'));
console.log(isPalindrome('ab'));

/* 
  Add your pseudocode here
  palidrome(word)
  string.toLowercase()
  let reversedWord
  return word
*/

/*
  Add written explanation of your solution here
  create a function palidrome with a parameter word,
  convert word to lowercase,
  write a function to reverse the word,
  use return word to check if the function works.
*/

// You can run `node index.js` to view these console logs

