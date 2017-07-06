// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function
function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
console.log(max(40, 90));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3) {
  if (num1 > (num2 && num3)) {
    return num1;
  }else if (num2 > num1 && num3){
    return num2
  }else  {
  return num3;
}
}
console.log(maxOfThree(10, 80, 225));// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

// function isVowel(char){
function character(vowels) {
  if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
    return true;
 }else {
   return false;
 }
}

console.log(character('rz'));
// }


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
   return (num1 + num2);
}

console.log(sum(9, 3));
// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  return (num1 + num2 + num3)/3;

}

console.log(avg(4, 5, 9));
// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getlength(astring){
  return astring.length;
}

console.log(getlength('dinosaurs'));
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2){
  if (num2 > num1){
    return true;
  }  else false;

}
 console.log(greaterThan(10, 28));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(name){
  return "Hello "+ name;
}
console.log(greet ("Steven"));

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4){
return "quick " + word1 + " fox " + word2 + " over " + word3 + word4;
}
console.log(madlib("brown", "jumps", "the", " fence"));
